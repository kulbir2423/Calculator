let btns = document.querySelectorAll(".btn");
let operations = document.querySelector(".operations");
let icon1 = document.querySelector(".icon1");
let total = 0;
let currentNumber = "";
let previousNumber = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    // If it is a number or "." or "00"
    if (!isNaN(value) || value === "." || value === "00") {
      currentNumber = currentNumber + value;
      operations.innerText = currentNumber;
    }
    // Percentage
    else if (value === "%") {
      if (value != "") {
        currentNumber = parseFloat(currentNumber / 100).toString();
        operations.innerText = currentNumber;
      }
    }

    // Operators
    else if (value === "+" || value === "-" || value === "/" || value === "x") {
      if (currentNumber !== "") {
        if (previousNumber !== "" && operator !== "") {
          let result = calcualte();
          currentNumber = result;
        }
        operator = value;
        previousNumber = currentNumber;
        currentNumber ="";
        operations.innerText = value;
      }
    }

    // Equal button 

    else if(value === "="){
      if(previousNumber!=="" && currentNumber!=="" && operator!=="") {
        let result = calculate();
        currentNumber = result;
        previousNumber = "";
        operator = "";
        operations.innerText = currentNumber;
      }
    }

    // If the user clicked AC or clearALL.
    if (value === "AC") {
      currentNumber = "";
      previousNumber = "";
      operator = "";
      operations.innerText = "";
    }
  });

  // If the user clicked delete previous element button.
  icon1.addEventListener("click", () => {
    let n = str.length - 1;
    currentNumber = currentNumber.slice(0, n);
  });
});

// Function for Calculations
var calculate = function () {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "x") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else return "Error";

  return result.toString();
};
