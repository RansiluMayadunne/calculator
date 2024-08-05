let display = document.getElementById('display');
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}

function setOperator(operator) {
    if (display.value === '') return;
    firstOperand = display.value;
    currentOperator = operator;
    display.value = '';
}

function calculate() {
    if (display.value === '' || firstOperand === '') return;
    secondOperand = display.value;
    let result;
    if (currentOperator === '+') {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (currentOperator === '-') {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (currentOperator === '*') {
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (currentOperator === '/') {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
    } else if (currentOperator === '^') {
        result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
    }
    display.value = result;
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
}

function calculateSqrt() {
    if (display.value === '') return;
    display.value = Math.sqrt(parseFloat(display.value));
}


function clearDisplay() {
    display.value = '';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
}
