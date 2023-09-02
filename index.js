const divident = document.querySelector(".divident");
const divisor = document.querySelector(".divisor");

const quotient = document.querySelector(".quotient");
const remainder = document.querySelector(".remainder");

const calculate = document.querySelector(".calculate");
const doRemainder = document.querySelector(".do-remainder");

calculate.addEventListener("click", () => {
  if (divident.value === "" || divisor.value === "") {
    error.innerHTML = "Make sure to enter something in the divident and divisor boxes!";
    return;
  }
});
