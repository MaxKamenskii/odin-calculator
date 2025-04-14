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

function operate(){
    const operatorMatch = display.innerText.match(/[+\-*/]/);
  if (!operatorMatch) {
    display.innerText = "Operator not found";
    return;
  }
  const operator = operatorMatch[0];
  console.log(`Operator is: ${operator}`)
  let operands = display.innerText.split(/[+\-*/]/)
  console.log(`Operands are: ${operands}`)
  const firstOperand = parseFloat(operands[0])
  const secondOperand = parseFloat(operands[1])
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
            if(!operators.includes(lastChar)) {
                display.innerText += value;
                dotPressed = false;
                operatorPressed = true;
            } 
        } else if(value === "=") {
            operate()
            display.innerText = result;
        } else {
            display.innerText += value;
            operatorPressed = false;
        } 
    });
});