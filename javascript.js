

/* Your calculator is going to contain functions for all of the basic math operators you typically
 find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
*/
function additionFunction (a,b){
    isNaN(a) || isNaN(b) ?   console.log( "nope!"): console.log(a + b);
}

function subtractFunction (a,b){
    isNaN(a) || isNaN(b) ?   console.log( "nope!"): console.log(a - b);

}

function multiplyFunction (a,b){
    isNaN(a) || isNaN(b) ?   console.log( "nope!"): console.log(a * b);

}

function divideFunction (a,b){
    isNaN(a) || isNaN(b) ?   console.log( "nope!"): console.log(a/b);

}


/* A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
*/
let firstNumber;
let operator;
let secondNumber;


// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate (firstNumber,operator,secondNumber){
additionFunction(firstNumber,secondNumber);
}


/* Create the functions that populate the display when you click the digit buttons.
 You should store the content of the display (the number) in a variable for use in the next step.
 */

// on the button click, it should put the number 






