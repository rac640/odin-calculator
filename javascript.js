// this currentNumber variable  will serve as a "current picture," capturing the current display content. 
let currentNumber ="";

// the firstNumber and secondNumber are  "pictures" of the current number. 
let firstNumber = "";
let secondNumber = "";

// operator Variable will be used in finding the first and second numbers. 
let operator = "";

// The result will also be used when chaining operators 
let result = "";



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
currentNumber =  parseInt(currentNumber + buttonNumber);
displayBoard.textContent = currentNumber;

    
}


// Step 3: create a function: Capture the currentNumber as the firstNumber when the operator is clicked. 

const operatorButtons = document.querySelectorAll(".operator");


// for each operator button that's clicked, run function: capture the currentNumber. 
operatorButtons.forEach((button) =>{
    button.addEventListener("click", ()=>{

        // if there's no first number, then "take a picture" of the currentNumber and set it as the first number. Store the operator as well. 
        if (firstNumber ==""){
            captureFirstNumber();
            operator = button.textContent;

        }

    //  If there is a first number, then capture the second number and result, and use the result as the first number. Store the operator. 
        else{
            captureSecondNumber();
            captureResult();
            firstNumber = result;
            displayBoard.textContent = firstNumber;
            operator = button.textContent;
        }
        
    
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


// Step 4: Let user input currentNumber; on equalsButton click, Capture second number. Then, evaluate and provide a result. 

const equalsButton = document.querySelector("#equalsButton");

equalsButton.addEventListener("click",()=>{
    captureSecondNumber();
    captureResult();
    displayBoard.textContent = result;

});

function captureSecondNumber(){
    secondNumber = currentNumber; 
    console.log("first Number: " + firstNumber);
    console.log("second number: " + secondNumber)
    currentNumber = '';
    displayBoard.textContent = '';
    
}

function captureResult(){

    if (operator == " +"){
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        return result;
    }
    else if (operator == " -"){
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        return result;
    }
    else if (operator ==" /"){
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        return result;
    }
    else if (operator == " *"){
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        return result;

    }
};


// Step 5: Chaining together operations 
//  Look at operatorButtons part. Function to run after operator is clicked: if there is a firstNum, then run the captureResult function. 



// Step 6: Eliminating zeros in the front. 
// Look at putNumbersOnDisplay function. Used parseInt: https://www.tutorialspoint.com/how-to-remove-leading-zeros-from-a-number-in-javascript 



// Step 7: Getting the Decimal to work
//Solution 1: Is there a decimal in the currentNumber? If yes, then change variable. 
// Solution 2: Does the displayBoard show a decimal? If not, then you can add one decimal. 
// function: putDecimalOnDisplay; global variable: decimalIsOnDisplay = false;  currentNumber = currentNumber + decimalOnDisplay, then change decimalIsOnDisplay to true. 
// use .includes method: https://www.w3schools.com/jsref/jsref_includes.asp 
//  When the decimal button is pressed, it should scan the display to see if there is already a decimal. If there isn't, then it should put one (currentNumber + "decimal"), and then change decimalIsOnDisplay. 

decimalIsPresent = false; 

const decimalButton = document.querySelector("#decimalButton");
decimalButton.addEventListener("click", ()=>{
//    Scan the display board to see if there is a "." If there is none, then put one. 
    if (!displayBoard.textContent.includes(".")){
    putDecimalOnDisplay(currentNumber);
    }
    
});

function putDecimalOnDisplay(selectedNumber){
   console.log( selectedNumber = selectedNumber + "." + 

    numberButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
    
            putNumberOnDisplay(button.textContent);
        });
     
    });

   );
// This function should take in the current number and add a "."

}

