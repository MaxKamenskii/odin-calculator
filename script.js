console.log('console test is working')

let firstNumber;
let secondNumber;
let result;
let counter = 0;

const add = function(firstNumber, secondNumber) {
    //firstNumber = Number(document.getElementById("first").value)
    //secondNumber = Number(document.getElementById("second").value)
	result = firstNumber+secondNumber;
	// console.log(firstNumber+secondNumber);
};

const subtract = function(firstNumber, secondNumber) {
	//firstNumber = Number(document.getElementById("first").value)
    //secondNumber = Number(document.getElementById("second").value)
	result = firstNumber-secondNumber;
	// console.log(firstNumber-secondNumber);
};

const multiply = function(firstNumber, secondNumber) {
	//firstNumber = Number(document.getElementById("first").value)
    //secondNumber = Number(document.getElementById("second").value)
	result = firstNumber*secondNumber;
	// console.log(firstNumber*secondNumber);
};

const divide = function(firstNumber, secondNumber) {
	//firstNumber = Number(document.getElementById("first").value)
    //secondNumber = Number(document.getElementById("second").value)
	result = firstNumber/secondNumber;
	// console.log(firstNumber/secondNumber);
};



// display
let display = document.getElementById("display")

// number buttons
const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const button0 = document.getElementById("0")
const buttonDot = document.getElementById("dot")
const ceButton = document.getElementById("ceButton")
const buttonPlus = document.getElementById("addButton")
const equalButton = document.getElementById("equalButton")
const multiplyButton = document.getElementById("multiplyButton")
const divideButton = document.getElementById("divideButton")



function add1ToDisplay() {
	document.getElementById("display").innerText += "1"
}
function add2ToDisplay() {
	document.getElementById("display").innerText += "2"
}
function add3ToDisplay() {
	document.getElementById("display").innerText += "3"
}
function add4ToDisplay() {
	document.getElementById("display").innerText += "4"
}
function add5ToDisplay() {
	document.getElementById("display").innerText += "5"
}
function add6ToDisplay() {
	document.getElementById("display").innerText += "6"
}
function add7ToDisplay() {
	document.getElementById("display").innerText += "7"
}
function add8ToDisplay() {
	document.getElementById("display").innerText += "8"
}
function add9ToDisplay() {
	document.getElementById("display").innerText += "9"
}
function add0ToDisplay() {
	document.getElementById("display").innerText += "0"
}
function addDotToDisplay() {
	document.getElementById("display").innerText += "."
}
function clear() {
	document.getElementById("display").innerText = ""
}
function addPlusToDisplay() {
	firstNumber = parseInt(display.innerText);
	document.getElementById("display").innerText += "+"
}
function addSubtractToDisplay() {
	firstNumber = parseInt(display.innerText);
	document.getElementById("display").innerText += "-"
}
function addMultiplyToDisplay() {
	firstNumber = parseInt(display.innerText);
	document.getElementById("display").innerText += "*"
}
function addDivideToDisplay() {
	firstNumber = parseInt(display.innerText);
	document.getElementById("display").innerText += "/"
}

function operate() {
	const equation = display.innerText;
	console.log(equation)
	let elements = equation.split(/[+\-*/]/)
	console.log(elements[0])
	console.log(elements[1])
	firstNumber = Number(elements[0])
	console.log(typeof firstNumber)
	
	secondNumber = Number(elements[1])
	console.log(typeof secondNumber)
	if(equation.includes("+")) {
		add(firstNumber, secondNumber)
	}
	if(equation.includes("-")) {
		subtract(firstNumber, secondNumber)
	}
	if(equation.includes("/")) {
		divide(firstNumber, secondNumber)
	}
	if(equation.includes("*")) {
		multiply(firstNumber, secondNumber)
	}
	counter = 0;
	document.getElementById("display").innerText = result

	
}

button1.addEventListener("click", add1ToDisplay)
button2.addEventListener("click", add2ToDisplay)
button3.addEventListener("click", add3ToDisplay)
button4.addEventListener("click", add4ToDisplay)
button5.addEventListener("click", add5ToDisplay)
button6.addEventListener("click", add6ToDisplay)
button7.addEventListener("click", add7ToDisplay)
button8.addEventListener("click", add8ToDisplay)
button9.addEventListener("click", add9ToDisplay)
button0.addEventListener("click", add0ToDisplay)
buttonDot.addEventListener("click", addDotToDisplay)
ceButton.addEventListener("click", clear)
addButton.addEventListener("click", addPlusToDisplay)
subtractButton.addEventListener("click", addSubtractToDisplay)
multiplyButton.addEventListener("click", addMultiplyToDisplay)
divideButton.addEventListener("click", addDivideToDisplay)
equalButton.addEventListener("click", operate)


