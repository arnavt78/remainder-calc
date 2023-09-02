// User inputs
const divident = document.querySelector(".divident");
const divisor = document.querySelector(".divisor");

// Outputs
const quotient = document.querySelector(".quotient");
const remainder = document.querySelector(".remainder");

// User inputs without textbox
const calculate = document.querySelector(".calculate");
const doRemainder = document.querySelector(".do-remainder");

const error = document.querySelector(".error");

calculate.addEventListener("click", () => {
  error.innerHTML = "";

  if (divident.value === "" || divisor.value === "") {
    error.innerHTML = "Make sure to enter something in the divident and divisor boxes!";
    return;
  }

  const calcNums = { divident: Number(divident.value), divisor: Number(divisor.value) };
  // If the divident or divisor are not a number
  if (Number.isNaN(calcNums.divident) || Number.isNaN(calcNums.divisor)) {
    error.innerHTML =
      "Make sure neither the divident nor the divisor has a special character or a letter!";
    return;
  }

  if (doRemainder.checked) {
    // Math:
    //
    // 1. Divide the divident and divisor like a regular division question.
    // 2. Round to the lowest whole number (e.g. 4.5 = 4).
    // 3. Remove all decimals points as they are not needed because of the remainder.
    //
    // 4. Get the remainder of dividing the divident and divisor together.

    quotient.value = Math.floor(calcNums.divident / calcNums.divisor).toFixed(0);
    remainder.value = Number.isNaN(calcNums.divident % calcNums.divisor)
      ? "N/A"
      : calcNums.divident % calcNums.divisor;
  } else if (!doRemainder.checked) {
    // Math:
    //
    // 1. Divide the divident and divisor like a regular division question.
    // 2. Show 10 decimal points, even if they are zero.
    // 3. Convert to string, getting rid of unnecessary zeros.

    quotient.value = Number((calcNums.divident / calcNums.divisor).toFixed(10)).toString();
    remainder.value = "N/A";
  }
});
