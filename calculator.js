const add = (num1, num2) => num1+num2
const subtract = (num1, num2) => num1-num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2

function operate(operator, num1, num2){
    //switch
        //case add
        //case subtract
        //case multiply
        //case divide
}

//html population
const body = document.querySelector("body")

const appendContainerToTarget = function(container,target){
    target.appendChild(container);
}

const calculatorContainer=function(){
    const calculator = document.createElement("div")
    calculator.classList.add("calculator")
    calculator.textContent="Calculator div is here!"
    return calculator
}

appendContainerToTarget(calculatorContainer(),body)
