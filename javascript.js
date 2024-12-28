// Step 1: Putting numbers on Display. 
const numberButtons = document.querySelectorAll('.numberButtons');
const display = document.getElementById('display');

// Add an event listener for each number button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Append the button's text content to the display
        display.textContent = display.textContent + button.textContent;
    });
});


// Step 2: Clearing the Display.

