const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let message = "";

  if (bmi < 18.5) {
    message = "Underweight 😟";
  } else if (bmi < 24.9) {
    message = "Normal weight 😊";
  } else if (bmi < 29.9) {
    message = "Overweight 😐";
  } else {
    message = "Obese 😟";
  }

  result.textContent = `Your BMI is ${bmi} - ${message}`;
});
