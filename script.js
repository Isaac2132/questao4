let display = document.getElementById('display');
let currentNumber = '';
let operator = '';
let firstOperand = '';

function addNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function addOperator(op) {
    if (operator === '') {
        operator = op;
        firstOperand = currentNumber;
        currentNumber = '';
    }
}

function calculate() {
    if (operator === '+') {
        let result = parseFloat(firstOperand) + parseFloat(currentNumber);
        display.value = result;
        operator = '';
        currentNumber = '';
        firstOperand = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    operator = '';
    firstOperand = '';
}


