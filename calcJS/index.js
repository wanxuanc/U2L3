let num1 = 8
let num2 = 6
document.getElementById("num1-el").innerHTML = num1
document.getElementById("num2-el").innerHTML = num2
function add(){
    document.getElementById("res-el").innerHTML = (num1 + num2)
}

function subtract(){
    document.getElementById("res-el").innerHTML = (num1 - num2)
}

function divide() {
    document.getElementById("res-el").innerHTML = (num1 / num2)
}

function multiply() {
    document.getElementById("res-el").innerHTML = (num1 * num2)
}
