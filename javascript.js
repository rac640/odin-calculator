function additionFunction (a,b){
   return a + b;
}

function subtractFunction (a,b){
    return a - b;

}

function multiplyFunction (a,b){
    return a * b;

}

function divideFunction (a,b){
  if (a == 0){ alert("error: can't divide by 0")} else{ return a/b} ;
}

let firstNumber;
let operator;
let secondNumber;
let operatorClick = false; 


// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate (firstNumber,operator,secondNumber){
// if operator is "+", it should run addition function. 
 if (operator == "+") return additionFunction(firstNumber, secondNumber);
 else if (operator =="-") return subtractFunction(firstNumber, secondNumber);
 else if (operator =="/") return divideFunction(firstNumber, secondNumber);
 else if (operator =="*") return multiplyFunction(firstNumber, secondNumber);

}



const numberButton = document.querySelectorAll(".numberButtons");

const displayBoard = document.querySelector("#display");
const firstDisplayBoard = document.createElement("div");
const secondDisplayBoard = document.createElement("div");

displayBoard.appendChild(firstDisplayBoard);


//  for each number button, when clicked, populate the display. 
numberButton.forEach((button)=>{
  // example: when clicking 1, create a div containing 1 on the display. 
  button.addEventListener("click", ()=>{
  const numberContainer = document.createElement("div");
  numberContainer.textContent = button.textContent;
  
  if (operatorClick == false ){
  firstDisplayBoard.appendChild(numberContainer);
  let firstDisplayedNumber = firstDisplayBoard.textContent;
  firstNumber = firstDisplayedNumber;


  /*

   I should reference firstDisplayBoard; if firstDisplayBoard[i] +1 or greater = 0, don't display.
   Pseudocode: while the user clicks zero as the first number, keep clearing the display board and putting zero. 
   
    create a function to remove leading zeros: https://www.geeksforgeeks.org/javascript-program-to-remove-leading-zeros/# 
  */

    function removeLeadingZeros(input) {
      console.log( Number(input).toString());
  }

  removeLeadingZeros(firstDisplayedNumber);

  console.log(firstDisplayBoard.firstChild);
  console.log("first Number:" + firstDisplayedNumber);

  }
  // after the operator is clicked, clear the board and find a second number. 
else{  
 
 if (secondNumber == undefined) {firstDisplayBoard.textContent = ""} ;


secondDisplayBoard.appendChild(numberContainer);
displayBoard.appendChild(secondDisplayBoard);

secondNumber = secondDisplayBoard.textContent;
console.log("second Number:" + secondNumber);

}

});

  });


let additionButton = document.getElementById("additionButton");
additionButton.addEventListener("click", ()=>{
  console.log(firstNumber);
  operator = "+";
  operatorClick = true;
 }

);

let subtractionButton = document.getElementById("subtractionButton");
subtractionButton.addEventListener("click", ()=>{
  operator = "-";
  operatorClick = true;
});

let multiplyButton = document.getElementById("multiplicationButton");
multiplyButton.addEventListener("click",()=> {
operator = "*";
operatorClick = true;
});

let divisionButton = document.getElementById("divisionButton");
divisionButton.addEventListener("click", ()=> {
operator = "/";
operatorClick = true;

});

let equalsButton = document.getElementById("equalsButton");
equalsButton.addEventListener("click", ()=>{

    
  // Used Number: https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum 
  let answer = operate(Number(firstNumber), operator, Number(secondNumber));
  let answerBoard = document.createElement("div");
  answerBoard.textContent = answer; 

  if (answer !== undefined) {secondDisplayBoard.textContent = '';};

displayBoard.appendChild(answerBoard);
});









