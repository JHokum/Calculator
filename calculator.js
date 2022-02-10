const add = (num1, num2) => num1+num2
const subtract = (num1, num2) => num1-num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2


//globals
let num1 = 0;
let num2 = 0;
let operator="";
const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));
const equals = document.querySelector(".equals");



//clearfunctionality
const clearDisplay = ()=>{
    display.textContent="";
}
//equals functionality
const equalsFunc = (operator, num1, num2)=>{
    
    switch(operator){
        case("divide"):
            clearDisplay();
            return num1/num2;
        case("multiply"):
            clearDisplay();
            return num1*num2;
        case("add"):
            clearDisplay();
            return num1+num2;
        case("subtract"):
            clearDisplay();
            return num1-num2;
    }
}

//Operations
const performOperation = function(str){
    changeDisplay("Operation Complete!");
}

// Change Display
const changeDisplay = function(str){
    display.textContent+=str;
}

//number key function
const numFunc = function(str){
    number = +str;
    if (num1==0){
        num1=number;
        changeDisplay(str);
    }
    else{
        num2=number;
        changeDisplay(str);
    }
}
//operator function
const opFunc = function(event){
    changeDisplay(targetContent(event));
    operator=targetData(event);
    
}

//targeting helper functions
const targetContent = function(event){
    return event.target.textContent;
}
const targetData = function(event){
    return event.target.dataset.operation;
}
//-------------------------
//Button Event Listeners - numbers, operators, equals
const addListeners = function(buttons){
    buttons.forEach(function(button){
        if (button.classList.contains("num")){
            button.addEventListener("click",e=>numFunc(targetContent(e)));
        } 
        else if(button.classList.contains("operator")){
            button.addEventListener("click",e=>opFunc(e))
        }
        else if(button.classList.contains("equals")){
            button.addEventListener("click",()=>changeDisplay(equalsFunc(operator, num1, num2)))
        }
        else if(button.classList.contains("clear")){
            button.addEventListener("click",()=>clearDisplay())
        }   
        })
}
addListeners(buttons);

