const buttons = document.querySelectorAll(".numpad_button");
const display = document.getElementById("display");
let dotPressed = false;
const operators = ["+", "-", "/", "*"]
let operatorPressed = false;
let result;

function add(a, b){
    result = a + b;
    console.log(`Result is: ${result}`)
    return result;
}
function subtract(a, b){
    result = a - b;
    console.log(`Result is: ${result}`)
    return result;
}
function multiply(a, b){
    result = a * b;
    console.log(`Result is: ${result}`)
    return result;
}
function divide(a, b){
    result = a / b;
    console.log(`Result is: ${result}`)
    return result;
}

// function hasTwoOperands(expression) {
//     const operatorMatch = expression.match(/[+\-*/]/)
//     if(!operatorMatch) return false;
//     const parts = expression.split(operatorMatch[0]);
//     return parts.length === 2 && parts[1] !== "";
// }

function operate(){
    const operatorMatch = display.innerText.match(/[+\-*/]/);
  if (!operatorMatch) {
    display.innerText = "Operator not found";
    return;
  }
  const operator = operatorMatch[0];
  console.log(`Operator is: ${operator}`)
  let operands = display.innerText.split(operator)
  console.log(`Operands are: ${operands}`)
  const firstOperand = parseFloat(operands[0])
  const secondOperand = parseFloat(operands[1])
  // prevent the lack of operands
  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    display.innerText = "Please enter both numbers";
    return;
  }
  // prevent dividing by zero
  if (operator === "/" && secondOperand === 0) {
    display.innerText = "Cannot divide by zero";
    return;
  }
  if(operator === "+"){
    return add(firstOperand, secondOperand)
  }
  if(operator === "-"){
    return subtract(firstOperand, secondOperand)
  }
  if(operator === "/"){
    return divide(firstOperand, secondOperand)
  }
  if(operator === "*"){
    return multiply(firstOperand, secondOperand)
  }
  
}

buttons.forEach(button => {
    const value = button.getAttribute("data-value");
    //display the pressed button in the console
    button.addEventListener("click", () => {
        // track last character to prevert entering an operator twice
        const lastChar = display.innerText.slice(-1);

        console.log("Button pressed:", value);
        // clear display when CE is pressed

        if(value === "CE"){
            display.innerText = ""
            dotPressed = false;
        } else if(value === ".") {
            if(dotPressed === false){
                display.innerText += value;
                dotPressed = true;
            }
        } else if(operators.includes(value)) {
            operatorMatch = display.innerText.match(/[+\-*/]/);
            if (operatorMatch) {
                const parts = display.innerText.split(operatorMatch[0]);
                if(parts.length === 2 && parts[1] !== "") {
                    console.log("Operator was pressed before");
                    const operateResult = operate();
                    if(operateResult !== undefined){
                        display.innerText = operateResult + value;
                    }
                } else if (!operators.includes(lastChar)) {
                    display.innerText += value;
                }
            } else if (!operators.includes(lastChar)) {
                display.innerText += value;
            }
            dotPressed = false;
            operatorPressed = true;
        } else if(value === "=") {
            const operateResult = operate()
            if(operateResult !== undefined){
                display.innerText = operateResult;
            }
            dotPressed = false;
            operatorPressed = false;
        } else if(display.innerText == result) {
            display.innerText = ""
            display.innerText += value;
            dotPressed = false;
            operatorPressed = false;
        }  else {
            display.innerText += value;
            operatorPressed = false;
        } 
    });
});