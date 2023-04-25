let numbers = document.querySelectorAll("input")
let button = document.querySelector("button")
let ans = document.getElementById("Sum")

function add(){
	let sum = 0
	sum = numbers[0].value + "+" + numbers[1].value
	ans.innerText = ""
	ans.innerHTML = eval(sum)
}
button.addEventListener("click", add)