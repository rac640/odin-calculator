// TAKEN FROM PERPLEXITY.AI ; NEED TO REVIEW THIS CODE LINE-BY-LINE 


// Get the display element
const display = document.getElementById('display');

// Variables to store the current input and operation
let currentInput = '';
let previousInput = '';
let operation = null;

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Function to handle number button clicks
function handleNumberClick(number) {
    
  if (currentInput === '0') {

// Replace that zero with the new number you pressed (Like erasing a '0' and writing your new number instead)
        currentInput = number;

    } else if (currentInput.length < 7){
    // Add the new number to the end (Ex: Writing 5 after 23 becomes 235)

        currentInput += number;
    }
    updateDisplay();
}

// Function to handle operator clicks
function handleOperatorClick(op) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '';
        operation = op;
    }
}

// Function to perform calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

// Add event listeners to number buttons
document.querySelectorAll('.numberButtons').forEach(button => {
    button.addEventListener('click', () => handleNumberClick(button.textContent));
});

// Add event listeners to operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button.textContent.trim()));
});

// Add event listener to equals button
document.getElementById('equalsButton').addEventListener('click', calculate);

// Add event listener to clear button
document.getElementById('clearButton').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
});

// Add event listener to decimal button
document.getElementById('decimalButton').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
});

// Initial display update
updateDisplay();
