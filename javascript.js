// this currentNumber variable  will serve as a "picture," capturing the current display content. 
let currentNumber ="";

// Step 1: Display number on board when button is clicked. 
const displayBoard = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numberButtons");


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
console.log(operatorButtons);

function captureFirstNumber(){

}