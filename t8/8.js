'use strict';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const start = document.getElementById("start");
const result = document.getElementById("result");

start.addEventListener("click", function() {

    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    const operator = operation.value;

    let answer;

    if (operator === "add") {
        answer = number1 + number2;
    }
    else if (operator === "sub") {
        answer = number1 - number2;
    }
    else if (operator === "multi") {
        answer = number1 * number2;
    }
    else if (operator === "div") {
        answer = number1 / number2;
    }

    result.textContent = answer;
});