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
  b == 0 ? alert("error: can't divide by 0"):console.log(a/b);
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
  button.addEventListener("click", ()=>{
  const numberContainer = document.createElement("div");
  numberContainer.textContent = button.textContent;
  

  if (operatorClick == false ){

  let displayedNumber = firstDisplayBoard.appendChild(numberContainer);
  let firstDisplayedNumber = firstDisplayBoard.textContent;
firstNumber = firstDisplayedNumber;
console.log("first Number:" + firstDisplayedNumber);

  }

else{  
 
 if (secondNumber == undefined) {firstDisplayBoard.textContent = ""} ;
 // if (secondNumber !== undefined){
 //     displayBoard.textContent = '';
 //     secondNumber = secondNumber+  button.textContent; 

 // }

secondDisplayBoard.appendChild(numberContainer);
displayBoard.appendChild(secondDisplayBoard);

//         let displayedNumber = firstDisplayBoard.appendChild(numberContainer);
 //  let firstDisplayedNumber = firstDisplayBoard.textContent;

secondNumber = secondDisplayBoard.textContent;
console.log("second Number:" + secondNumber);


}

})

  });





let additionButton = document.getElementById("additionButton");
additionButton.addEventListener("click", ()=>{
  
  console.log(firstNumber);
  operator = "+";
  operatorClick = true;

 }


  
 

);




// 

let equalsButton = document.getElementById("equalsButton");











