const body = document.body;
const calculatorContainer = document.getElementById("calculatorContainer");
const userInput = document.getElementById("input");

const numberButton = document.querySelectorAll(".numberBtn");

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    userInput.textContent += button.textContent;
  })
})


let equal = 0;
function plusOp(num1, num2) {
  equal = num1 + num2;
  return equal;
}
function minusOp(num1, num2) {
  equal = num1 - num2;
  return equal;
}
function mulOp(num1, num2) {
  equal = num1 * num2;
  return equal;
}
function divOp(num1, num2) {
  equal = num1 / num2;
  return equal;
}
