const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const lbs = parseFloat(document.getElementById("lbs").value);

 if (isNaN(feet) || feet < 0 || isNaN(inches) || inches < 0 || isNaN(lbs) || lbs <= 0) {
  result.textContent = "Please enter valid height and weight!";
  return;
}
 {
    result.textContent = "Please enter valid height and weight!";
    return;
  }

  // Convert feet+inches to cm
  const totalInches = feet * 12 + inches;
  const heightInMeters = totalInches * 0.0254; // inch → meters

  // Convert lbs to kg
  const weightInKg = lbs * 0.453592;

  const bmi = (weightInKg / (heightInMeters ** 2)).toFixed(2);

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
