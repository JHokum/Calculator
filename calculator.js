const add = (num1, num2) => num1+num2
const subtract = (num1, num2) => num1-num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2


//globals
let num1 = 0;
let num2 = 0;
let operator="";
function operate(operator, num1, num2){
    //switch
        //case add
        //case subtract
        //case multiply
        //case divide
}

const buttons = Array.from(document.querySelectorAll("button"));
// buttons.forEach(button=>button.addEventListener("click",(e)=>display.textContent+=e.target.textContent))
const equals = document.querySelector(".equals");
//clearfunctionality
const clearDisplay = ()=>{
    display.textContent="";
}
//equals functionality
const equalsFunc = (operator, num1, num2)=>{
    
    switch(operator){
        case("divide"):
            return num1/num2;
        case("multiply"):
            return num1*num2;
        case("add"):
            return num1+num2;
        case("subtract"):
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
//buttons
const addListeners = function(buttons){
    buttons.forEach(function(button){
        if (button.classList.contains("num")){
            button.addEventListener("click",e=>numFunc(targetContent(e)));
        } 
        else if(button.classList.contains("operator")){
            button.addEventListener("click",e=>opFunc(e))
        }
        else if(button.classList.contains("equals")){
            button.addEventListener("click",()=>changeDisplay(equalsFunc))
        }   
        })
}
addListeners(buttons);

const display = document.querySelector(".display");


//html population ----------------------------------------------
// const body = document.querySelector("body")


// const createContainer = function(className){
//     const container = document.createElement("div")
//     container.classList.add(className)
//     return container
// }


// const appendContainerToTarget = function(container,target){
//     target.appendChild(container);
// }

// const calculatorContainer=function(){
//     const str = "calculator"
//     const calculator = createContainer(str)
//      appendContainerToTarget(numOneToNineContainer(),calculator)
//     return calculator
// }

// const numOneToNineContainer = function(){
//     const str = "OneToNine";
//     const OneToNine = createContainer(str)
//     //populate OneToNine with numbers
//     return OneToNine
// }

// const oneToNineNums



// appendContainerToTarget(calculatorContainer(),body);
