console.log('console test is working')

let a;
let b;

const add = function() {
    a = Number(document.getElementById("first").value)
    b = Number(document.getElementById("second").value)
	console.log(a+b);
};

const subtract = function() {
	a = Number(document.getElementById("first").value)
    b = Number(document.getElementById("second").value)
	console.log(a-b);
};

const multiply = function() {
	a = Number(document.getElementById("first").value)
    b = Number(document.getElementById("second").value)
	console.log(a*b);
};

const divide = function() {
	a = Number(document.getElementById("first").value)
    b = Number(document.getElementById("second").value)
	console.log(a/b);
};

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
