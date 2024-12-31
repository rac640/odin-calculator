// this currentNumber variable  will serve as a "picture," capturing the current display content. 
let currentNumber ="";
let firstNumber = "";
// operator Variable will be used in finding the first and second numbers. 
let operator = "";


// Step 1: Display number on board when button is clicked. 
const displayBoard = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numberButtons");

// for each button click, run the function to add the number to display. 
numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{

        putNumberOnDisplay(button.textContent);
    });
 
});

// Step 2: Create a function: When a number button is clicked, it should add a number to the display. 

function putNumberOnDisplay(buttonNumber){
currentNumber =  currentNumber + buttonNumber;
displayBoard.textContent = currentNumber;

    
}


// Step 3: create a function: Capture the currentNumber as the firstNumber when the operator is clicked. 

const operatorButtons = document.querySelectorAll(".operator");


// for each operator button that's clicked, run function: capture the currentNumber. 
operatorButtons.forEach((button) =>{
    button.addEventListener("click", ()=>{

        operator = button.textContent;
        captureFirstNumber();
    });

});

// function should: "take picture" of current displayBoard/ currentNumber, set it as the firstNumber, and then reset the currentNumber and displayBoard. 
function captureFirstNumber(){
    firstNumber = currentNumber;
    // test to see if firstNumber is assigned 
    console.log(firstNumber);
    currentNumber = '';
    displayBoard.textContent = '';
}