let inputValue = "";
let operater = "";
let num1 = 0;
let num2 = 0;

const userInput = document.getElementById("input");
const total = document.getElementById("total");

const numberButton = document.querySelectorAll(".numberBtn");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");

// Click on Number Button and it will show up on input display
// inputValue = Stored Value
numberButton.forEach((number) => {
  number.addEventListener("click", () => {
    if (total.textContent !== "0" && operater === "") {
      total.textContent = 0;
    }
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

function operate() {
  if (total.textContent === "0") {
    total.textContent = inputValue;
    inputValue = "";
    userInput.textContent = "";
  } else if (inputValue === "") {
    return
  } else {
    num1 = Number(total.textContent)
    num2 = Number(inputValue)

    switch (operater) {
      case '+':
        plusOp(num1, num2);
        break;
      case '-':
        minusOp(num1, num2);
        break;
      case '×':
        mulOp(num1, num2);
        break;
      case '÷':
        divOp(num1, num2);
        break;
      case '':
        break
    }
    total.textContent = equal;
    inputValue = "";
    userInput.textContent = "";
  }
}

operatorButton.forEach((operator) => {
  operator.addEventListener('click', () => {
    operater = operator.textContent;
    operate();
  })
})

equalButton.addEventListener('click', () => {
  operate();
  operater = "";
});