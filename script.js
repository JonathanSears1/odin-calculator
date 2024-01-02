let numbers = document.getElementsByClassName("number")
let display_text = document.getElementById("display_text")
let display = document.getElementById("display")
let btnContainer = document.getElementById("button_container")
let operators = document.getElementsByClassName("operator")
let enter = document.getElementById("enter")
let clear = document.getElementById("clear")
let del = document.getElementById("delete")
let num1 = ""
let num2 = ""
let operator = ""
let preoperator = true
let prev = false
/*
When you click on an operator button
*/
for (let i=0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        preoperator = false
        operator = operators[i].textContent
    })
}
for (let i = 0; i <numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            if (preoperator == true) {
                if (prev == false) {
                num1 = num1 + numbers[i].textContent
                }
                else {
                    num1 = numbers[i].textContent
                    prev = false
                }
                display_text.textContent = num1
            }
            else {
                num2 = num2 + numbers[i].textContent
                display_text.textContent = num2
            }
        })
    }

function operate(num1,num2,operator) {
    console.log(num1)
    console.log(num2)
    console.log(operator)
    if (num1 == "" || num2 == "") {
        return "error"
    }
    if (operator == "+") {
        return String(Number(num1) + Number(num2))
    }
    if (operator == "-") {
        return String(Number(num1) - Number(num2))
    }
    if (operator == "*") {
        return String(Number(num1) * Number(num2))
    }
    if (operator == "/") {
        return String(Number(num1) / Number(num2))
    }
}

enter.addEventListener("click", () => {
    let ans = operate(num1,num2,operator)
    display_text.textContent = ans
    num1 = ans
    num2 = ""
    operator = ""
    prev = true
    preoperator = true
})
del.addEventListener("click", () => {
    if (preoperator == true) {
        if (num1.length > 1) {
            num1 = num1.slice(0,num1.length-1)
            display_text.textContent = num1
        }
        else {
            num1 = ""
            display_text.textContent = num1
        }
    }
    else {
        if (num2.length > 0) {
            num2 = num2.slice(0,num2.length-1)
            display_text.textContent = num2
        }
        else {
            num2 = ""
            display_text.textContent = num2
        }
    }
})
clear.addEventListener("click", () => {
    display_text.textContent = ""
    num1 = ""
    num2 = ""
    operator = ""
})