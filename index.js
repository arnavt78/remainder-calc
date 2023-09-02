const divident = document.querySelector(".divident");
const divisor = document.querySelector(".divisor");

const quotient = document.querySelector(".quotient");
const remainder = document.querySelector(".remainder");

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
  if (Number.isNaN(calcNums.divident) || Number.isNaN(calcNums.divisor)) {
    error.innerHTML =
      "Make sure neither the divident nor the divisor has a special character or a letter!";
    return;
  }

  if (doRemainder.checked) {
    quotient.value = Math.floor(calcNums.divident / calcNums.divisor).toFixed(0);
    remainder.value = calcNums.divident % calcNums.divisor ?? "N/A";
  } else if (!doRemainder.checked) {
    quotient.value = Number((calcNums.divident / calcNums.divisor).toFixed(10)).toString();
    remainder.value = "N/A";
  }
});
