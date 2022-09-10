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
  switch (operation) {
    case "add":
      return add(Number(num1), Number(num2));
    case "subtract":
      return subtract(Number(num1), Number(num2));
    case "multiply":
      return multiply(Number(num1), Number(num2));
    case "devide":
      return devide(Number(num1), Number(num2));
  }
}

let num1 = "";
let num2 = "";
let operations = "";

let display = document.querySelector(".display");
function updateDisplay() {
  display.textContent = `${num1} ${operations} ${num2}`;
}

const numbers = document.querySelectorAll(".numbers");
//getting num1 and num2
numbers.forEach((number) =>
  number.addEventListener("click", () => {
    if (operations === "") {
      num1 += number.textContent;
      if (num1.includes(".")) dotButton.disabled = true;
      updateDisplay();
    } else {
      num2 += number.textContent;
      if (num2.includes(".")) dotButton.disabled = true;
      updateDisplay();
    }
  })
);

//getting operator
const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (operations === "") {
      //the first operator clicked
      operation = op.id;
      operations = op.textContent;
      dotButton.disabled = false;
      updateDisplay();
      //console.log(operation, num1);
    } else {
      //first evaluate the previous operation
      dotButton.disabled = false;
      if (evaluate() !== null) {
        display.textContent = evaluate();
        num1 = display.textContent;
        num2 = "";
        operation = op.id;
        operations = op.textContent;
        updateDisplay();
      }
    }
  });
});

function evaluate() {
  if (num1 !== "" && num2 !== "" && operations !== "") {
    if (num2 === "0" && operations === "÷") {
      alert(`You can't devide numbers by zero!`);
      return null;
    }
    if (decimalCount(operator(operation, num1, num2)) > 5) {
      //round the result
      return Math.round(operator(operation, num1, num2) * 100000) / 100000;
    } else {
      return operator(operation, num1, num2);
    }
  }
}

//"=" button
const equal = document.querySelector(".Equals");
equal.addEventListener("click", () => {
  if (operations !== "" && num2 !== "") {
    if (evaluate() !== null) {
      display.textContent = evaluate();
      dotButton.disabled = false;
      num1 = display.textContent;
      num2 = "";
      operations = "";
    }
  }
});

//"clear" button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operations = "";
  updateDisplay();
});

function decimalCount(num) {
  const numStr = String(num);
  if (numStr.includes(".")) {
    return numStr.split(".")[1].length;
  }
}

const dotButton = document.querySelector(".dot");

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
  if (operations === "" && num2 === "") {
    num1 = num1.slice(0, -1);
    updateDisplay();
  } else if (num2 === "" && operations !== "") {
    operations = operations.slice(0, -1);
    updateDisplay();
  } else {
    num2 = num2.slice(0, -1);
    updateDisplay();
  }
});
