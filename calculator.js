let inputValue = "";
let totalValue = "";
let operater = "";
let num1 = 0;
let num2 = 0;

const userInputDisplay = document.getElementById("input");
const totalDisplay = document.getElementById("total");

const numberButton = document.querySelectorAll(".numberBtn");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");

// Click on Number Button and it will show up on input display
// inputValue = Stored Value
numberButton.forEach((number) => {
  number.addEventListener("click", () => {
    if (totalDisplay.textContent !== "0" && operater === "") {
      totalDisplay.textContent = 0;
    }
    if (inputValue.length <= 11) {
      inputValue += number.textContent;
      userInputDisplay.textContent = inputValue;
    }
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener('click', () => {
    operater = operator.textContent;
    totalValue = inputValue;
    totalDisplay.textContent = totalValue + " " + operater;
    inputValue = "";
    userInputDisplay.textContent = "";
  })
})

// Clear
clearButton.addEventListener("click", () => {
  inputValue = "";
  userInputDisplay.textContent = "";
  total.textContent = 0;
});

function operate() {
  if (operater) {
    inputValue = Number(inputValue);
    totalValue = Number(totalValue);

    if (operater === "+") {
      totalValue += inputValue;
    } else if (operater === "-") {
      totalValue -= inputValue;
    } else if (operater === "×") {
      totalValue *= inputValue;
    } else if (operater === "÷") {
      if (inputValue == 0) {
        total.textContent = "ERR";
      } else {
        totalValue /= inputValue;
      }
    }
    totalValue = totalValue.toString();
    totalDisplay.textContent = totalValue;
    userInputDisplay.textContent = "";
    inputValue = "";
    operater = "";
  }
}

equalButton.addEventListener('click', operate);