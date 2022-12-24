const body = document.body;
const calculatorContainer = document.getElementById("calculatorContainer");
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
