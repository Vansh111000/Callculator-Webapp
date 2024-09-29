// Reference to the display
let display = document.getElementById('display');

// Append number to the display
function appendNumber(number) {
    display.value += number;
}

// Append operator to the display
function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];

    // Prevent multiple consecutive operators
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
