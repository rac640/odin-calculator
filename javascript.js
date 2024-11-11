

/* Your calculator is going to contain functions for all of the basic math operators you typically
 find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
*/
function additionFunction (a,b){
   console.log(a + b);
}

function subtractFunction (a,b){
    console.log(a - b);

}

function multiplyFunction (a,b){
    console.log(a * b);

}

function divideFunction (a,b){
  b == 0 ? console.log("error: can't divide by 0"):console.log(a/b);


}


/* A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
*/
let firstNumber;
let operator;
let secondNumber;


// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate (firstNumber,operator,secondNumber){
// if operator is "+", it should run addition function. 
 if (operator == "+") return additionFunction(firstNumber, secondNumber);
 else if (operator =="-") return subtractFunction(firstNumber, secondNumber);
 else if (operator =="/") return divideFunction(firstNumber, secondNumber);
 else if (operator =="*") return multiplyFunction(firstNumber, secondNumber);

}

operate (2, "/" , 0);


/* Create the functions that populate the display when you click the digit buttons.
 You should store the content of the display (the number) in a variable for use in the next step.
 */


const numberButton = document.querySelectorAll(".numberButtons");

const displayBoard = document.querySelector("#display");


numberButton.forEach((button)=>{

    button.addEventListener("click", ()=>{
  
  /*When button is clicked, it should append a div/p inside of the DisplayBoard. 
  Inside of this div should have the text button's text content. 
  
  Code below inspired by: https://stackoverflow.com/questions/27079598/error-failed-to-execute-appendchild-on-node-parameter-1-is-not-of-type-no
*/
  const numberContainer = document.createElement("div");
    numberContainer.textContent = button.textContent;
  let displayedNumber = displayBoard.appendChild(numberContainer);

  

   /* 
    3. Finally, it should save the displayed number in a variable. 
    */

  let finalDisplayedNumber = displayBoard.textContent;

  console.log(finalDisplayedNumber);

   
    });



   
    

});









