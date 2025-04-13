const buttons = document.querySelectorAll(".numpad_button").forEach(button => {
    const value = button.getAttribute("data-value");
    //display the pressed button in the console
    button.addEventListener("click", () => {
        console.log("Button pressed:", value)
    })
})