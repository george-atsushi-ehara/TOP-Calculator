let inputValue = "";
let totalValue = "";
let operater = "";

const userInput = document.getElementById("input");
const total = document.getElementById("total");

const operatorButton = document.querySelectorAll(".operator");
const numberButton = document.querySelectorAll(".numberBtn");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");

// Click on Number Button and it will show up on input display
// inputValue = Stored Value

numberButton.forEach((number) => {
  number.addEventListener("click", () => {
    inputValue += number.textContent;
    userInput.textContent = inputValue;
  });
});
// Operators
let equal = 0;
function plusOp(num1, num2) {
  equal = num1 + num2;
}
function minusOp(num1, num2) {
  equal = num1 - num2;
}
function mulOp(num1, num2) {
  equal = num1 * num2;
}
function divOp(num1, num2) {
  if (num2 == 0) {
    return "ERR";
  } else {
    equal = num1 / num2;
  }
}

// Clear
clearButton.addEventListener("click", () => {
  inputValue = "";
  userInput.textContent = "";
  total.textContent = 0;
});

function operate(num1, num2) { }
