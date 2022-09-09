function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function devide(num1, num2) {
  return num1 / num2;
}

function operator(operation, num1, num2) {
  return operation(num1, num2);
}

let display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) =>
  number.addEventListener(
    "click",
    () => (display.textContent = display.textContent.concat(number.textContent))
  )
);
