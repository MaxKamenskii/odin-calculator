const buttons = document.querySelectorAll(".numpad_button");
const display = document.getElementById("display");
let dotPressed = false;
const operators = ["+", "-", "/", "*"]
let operatorPressed = false;

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
        } else {
            display.innerText += value;
            operatorPressed = false;
        }
    });
});