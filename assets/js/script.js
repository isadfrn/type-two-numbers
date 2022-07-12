function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  const divisionResult =  a / b;
  return divisionResult.toFixed(2)
}

function remainder(a, b) {
  return a % b;
}

function isEvenOrOdd(a, b) {
  const sumResult = a + b;
  if (sumResult % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function isEqual(a, b) {
  if (a == b) {
    return "yes";
  } else {
    return "no";
  }
}

function runCalc() {

  const numberOne = Number(document.getElementById("number1").value);
  const numberTwo = Number(document.getElementById("number2").value);

  const terminalTextArea = document.querySelector(".terminal-text-area");

  terminalTextArea.innerHTML = '';

  terminalTextArea.insertAdjacentHTML(
    "beforeend",
    `
    <p class="terminal-output">The sum is: ${sum(numberOne, numberTwo)}</p>
    <p class="terminal-output">The subtraction is: ${subtraction(numberOne, numberTwo)}</p>
    <p class="terminal-output">The product is: ${product(numberOne, numberTwo)}</p>
    <p class="terminal-output">The division is: ${division(numberOne, numberTwo)}</p>
    <p class="terminal-output">The division remainder is: ${remainder(numberOne, numberTwo)}</p>
    <p class="terminal-output">Sum is even or odd? ${isEvenOrOdd(numberOne, numberTwo)}</p>
    <p class="terminal-output">Numbers are the same? ${isEqual(numberOne, numberTwo)}</p>
    `
  )
}

