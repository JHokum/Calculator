const add = (num1, num2) => num1+num2
const subtract = (num1, num2) => num1-num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2


//globals
let num1 =0;
let num2=0;
let operator="";
const displayMini = document.querySelector(".display.mini");
const displayBig = document.querySelector(".display.big")
const buttons = Array.from(document.querySelectorAll("button"));
const equals = document.querySelector(".equals");



//clearfunctionality
const clearDisplay = (num)=>{
    if(num==1){
        displayBig.textContent="";
    }
    if (num==0){
        displayBig.textContent="";
        displayMini.textContent="";
    }
    
}
const clearGlobals = ()=>{
    num1=0;
    num2=0;
    operator=0;
}
const clearAll = (num)=>{
    clearDisplay(num);
    clearGlobals();
}
//equals functionality
const equalsFunc = (operation, number1, number2)=>{
    swapDisplay();
    clearAll(1);
    switch(operation){
        case("divide"):
            
            return divide(number1,number2);
        case("multiply"):
            
            return multiply(number1, number2);
        case("add"):
            
            return add(number1, number2);
        case("subtract"):
            
            return subtract(number1, number2);
    }
    
}



// Change Display
const changeDisplay = function(str){
    // display.textContent+=str;
    displayBig.textContent+=str;
}
const swapDisplay = function(){
    displayMini.textContent=displayBig.textContent;
}

//number key function
const numFunc = function(str){
    number = str;
    if (num1==0||operator==""){
        num1+=number;
        num1 = +num1;
        changeDisplay(str);
    }
    else{
        num2+=number;
        num2 = +num2;
        changeDisplay(str);
    }
}
//operator function
const opFunc = function(event){
    if(operator!=""){
        let hold = equalsFunc(operator,num1,num2);
        changeDisplay(hold);
        num1=+hold;
    }
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
            button.addEventListener("click",()=>num1=+(displayBig.textContent))
        }
        else if(button.classList.contains("clear")){
            button.addEventListener("click",()=>clearAll(0))
        }   
        })
}
addListeners(buttons);

