const buttons = document.querySelectorAll(".numpad_button");
const display = document.getElementById("display");

buttons.forEach(button => {
    const value = button.getAttribute("data-value");
    //display the pressed button in the console
    button.addEventListener("click", () => {
        console.log("Button pressed:", value);
        // clear display when CE is pressed
        if(value === "CE"){
            display.innerText = ""
        } else {
            display.innerText += value;
        }
    });
});