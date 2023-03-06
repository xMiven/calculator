const numbers = document.querySelectorAll(".number");
const functions = document.querySelectorAll(".function");
const intro = document.querySelector("#intro");
const display = document.querySelector("#display");
const history = document.querySelector("#history");
const clearButton = document.querySelector("#clear");

let a = 0;
let b = 0;
let isASet = false;
let isBSet = false;
let operation = "";
let isNew = false;

intro.addEventListener("click", () => {
  compute();
});

clearButton.addEventListener("click", () => {
  clear();
});

function addEventListenerFunc(arr) {
  for (i = 0; i < functions.length; i++) {
    arr[i].addEventListener("click", (e) => {
      setValue(display);
      operation = e.target.value;
      history.textContent = `${a} ${operation}`;
    });
  }
}

function addListeners(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (e) => {
      if (isNew) {
        clear();
        history.textContent = "";
      }
      display.textContent += e.target.value;
    });
  }
}

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clear() {
  display.textContent = "";
}

function reset() {
  isASet = false;
  isBSet = false;
  isNew = true;
}

function setValue(display) {
  if (!isASet) {
    a = display.textContent;
    isASet = true;
    history.textContent = a;
    clear();
  } else if (!isBSet) {
    b = display.textContent;
    isBSet = true;
    history.textContent = `${a} ${operation} ${b} =`;

    clear();
  }
}

function compute() {
  setValue(display);
  a = parseInt(a);
  b = parseInt(b);
  switch (operation) {
    case "+": {
      display.textContent = sum(a, b);
      reset();
      break;
    }
    case "-": {
      display.textContent = substract(a, b);
      reset();
      break;
    }
    case "X": {
      display.textContent = multiply(a, b);
      reset();
      break;
    }
    case "/": {
      display.textContent = divide(a, b);
      reset();
      break;
    }
  }
}

addListeners(numbers);
addEventListenerFunc(functions);
