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
        // if variable is true, then the decimalButton should be re-enabled.
        let decimalOnDisplay = false;  
        if (decimalOnDisplay == false){
            decimalButton.disabled = false;
        }
        // if the displayBoard has a decimal, then disable the decimalButton. 
        if (displayBoard.textContent.includes(".")){
            // Disabling a button: https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button 
            decimalButton.disabled =true;
        }

    });
 
});

// Step 2: Create a function: When a number button is clicked, it should add a number to the display. 

function putNumberOnDisplay(buttonNumber){


currentNumber =  String(currentNumber + buttonNumber);


// turn the currentNumber into an array, to check if there is a zero in the front. 
let  currentNumberArray = currentNumber.split("");

    

console.log(currentNumberArray);
// If the first element of the currentNumberArray is zero, then empty the array and set the displayBoard to zero. 


displayBoard.textContent = currentNumber; 

console.log(currentNumberArray);
    
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

// If there is no second Number, then just return the first number as the result (Ex: 5++)
    if (secondNumber ==""){
        // if there is a result, then just print the result. 
        if (result !==""){
            return result;
        }
        else{

        result = parseFloat(firstNumber);
        return result;
    }
    }
   

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
// NEED TO RE-DO THIS PART. 
// IDEA: Check currentNumber string to see if zero is the first number. If it is, then disable the zero button. If the first number is not zero, then enable the zero button is Use .indexOf : https://www.geeksforgeeks.org/how-to-find-the-index-of-specific-character-in-a-string-in-javascript/


// Step 7: Getting the Decimal to work
// Look at numberButtons part. I put the decimal button into the numberButton class, and gave it an ID as well.  
// Only add decimal button once: Does the displayBoard show a decimal? If not, then you can add one decimal. Use .includes method: https://www.w3schools.com/jsref/jsref_includes.asp 

// Target the decimal Button (It has both a class and an ID). When the display already has a ".", then it should disable the button. 
let decimalButton = document.querySelector("#decimalButton");


// Step 8: Clearing the board 
// when the clear button is clicked, clear everything: FirstNumber, Operator, secondNumber, currentNumber, displayBoard.\\\

let clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click", ()=>{
    firstNumber ="";
    secondNumber = "";
    operator = "";
    currentNumber = "";
    displayBoard.textContent ="";
});


// Step 9: Click Operator only once 
// Problem: When I click the operator two times, it gives NaN (Ex: "5++" gives me "NaN")
// Solution: Look at captureResult function: If there is no second Number, then  return the first number as the result (Ex: 5++)


// Problem: Pressing equals twice or more gives me the firstNumber (Ex: 5+3= 8; then, when pressing = again, it gives me 5). 
// Solution: Look at captureResult() function: If the secondNumber is "", check to see if there is a result;  if there is a result, then print the result. Else, the first number will be the result. 

// Problem: Getting rid of zeros in front (Ex: typing in "00000" should show "0" until I press "7", when it should show "7").


/*Look at putNumbersOnDisplay Function:This should be useful to help remove the leading 
zeros from the array: https://www.tutorialspoint.com/remove-leading-zeros-in-array-javascript#:~:text=To%20remove%20the%20leading%20zeros%20in%20the%20array%20we%20have,()%20method%20will%20remove%20them. */


