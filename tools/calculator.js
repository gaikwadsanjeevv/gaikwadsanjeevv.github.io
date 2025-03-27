const display = document.getElementById("display");
const themeToggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression!");
  }
}

// Light/Dark Toggle
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  modeLabel.textContent = document.body.classList.contains("dark") ? "🌙 Dark Mode" : "☀️ Light Mode";
});
