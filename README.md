# odin-calculator

In this project, I: 

- Combined HTML, CSS, and JavaScript to create a calculator.  
- Used DOM Manipulation for real-time display updates when pressing a button. 
- Used the chrome debugger to go through each function step-by-step (the click event listener breakpoint was particularly helpful in this project)
- Used comments within my code to keep me organized. 
- Used branches to define exactly what I was working on/what problem I was solving (Ex: if I wa solving leading zeros, then I would create a branch committed to solving that problem)

Line(s) of code I'm proud of: Lines 145-156:

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


Why: Because I spent a long time trying to figure out how to not get NaN when pressing the equals button or operator buttons more than once; after asking questions and getting a few hints, I used the Chrome Debugger tool to help me figure out what was going on step-by-step, which helped me resolve this problem. 


What I need to work on: 

- Taking things step-by-step, and try to map out the project ahead of time, and find a way to solve the probem that works for me.
    - Example: When re-doing the project from scratch, I simplified the problem of capturing the firstNumber and secondNumber; I thought of creating functions that would act as a camera, that would take a picture and "capture" the firstNumber and secondNumber. This way of thinking worked better for me. 


How my project can be improved: 

- Make it so that I can type in the numbers and operators. 
