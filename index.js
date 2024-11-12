// Theme toggle
const themeToggle = document.querySelector(".themeToggle");

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

/**
 * Set the theme of the webpage.
 *
 * @param {string} theme Either `dark` or `light`; it cannot be set to anything else.
 */
const setTheme = (theme) => {
  document.body.setAttribute("data-bs-theme", theme);
  themeToggle.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("currentTheme", theme);
};

/**
 * Calculate divison question entered.
 */
const handleCalculate = (e) => {
  if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
    error.innerHTML = "";

    const divValue = Number(divident.value);
    const divsValue = Number(divisor.value);

    if (!divident.value || !divisor.value) {
      error.innerText = "Error: At least one value is empty.";
      return;
    }

    if (isNaN(divValue) || isNaN(divsValue)) {
      error.innerText = "Error: At least one value has invalid characters.";
      return;
    }

    quotient.value = (
      doRemainder.checked ? Math.floor(divValue / divsValue) : (divValue / divsValue).toFixed(10)
    ).toString();

    remainder.value = doRemainder.checked
      ? divValue === divsValue
        ? 0
        : divValue % divsValue
      : "N/A";
  }
};

// Initialize theme based on stored preference or system preference
const savedTheme = localStorage.getItem("currentTheme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const newTheme = localStorage.getItem("currentTheme") === "dark" ? "light" : "dark";
  setTheme(newTheme);

  // Prevent rapid toggling for epileptic seizures
  themeToggle.disabled = true;
  setTimeout(() => {
    themeToggle.disabled = false;
  }, 1000);
});

// Event listener for "Calculate" button click or Enter key press
document.addEventListener("keydown", handleCalculate);
calculate.addEventListener("click", handleCalculate);
