document.addEventListener("DOMContentLoaded", function () {
  let calculateAge = document.getElementById("calculate-age");
  let birthYearInput = document.getElementById("birth-year");
  let birthMonthInput = document.getElementById("birth-month");
  let birthDayInput = document.getElementById("birth-day");
  let ageYearOutput = document.getElementById("ageYear");
  let ageMonthOutput = document.getElementById("ageMonth");
  let ageDaysOutput = document.getElementById("ageDays");

  calculateAge.addEventListener("click", function () {
    let birthYear = parseInt(birthYearInput.value);
    let birthMonth = parseInt(birthMonthInput.value);
    let birthDay = parseInt(birthDayInput.value);
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate();

    if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
      birthDayInput.style.borderColor = "hsl(0, 100%, 67%)";
      birthMonthInput.style.borderColor = "hsl(0, 100%, 67%)";
      birthYearInput.style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("wrongMonth").textContent =
        "this fiels is requierd";
      document.getElementById("wrongMonth").hidden = false;
      document.getElementById("wrongDay").textContent =
        "this fiels is requierd";
      document.getElementById("wrongDay").hidden = false;
      document.getElementById("wrongYear").textContent =
        "this fiels is requierd";
      document.getElementById("wrongYear").hidden = false;
      document.querySelectorAll(".error").forEach((word) => {
        word.style.color = "hsl(0, 100%, 67%)";
      });
      ageYearOutput.textContent = "--";
      ageMonthOutput.textContent = "--";
      ageDaysOutput.textContent = "--";
      return; // Exit the function if inputs are NaN
    }
    document.getElementById("wrongDay").textContent = "Must be a valid Day";
    document.getElementById("wrongMonth").textContent = "Must be a valid Month";
    document.getElementById("wrongYear").textContent = "Must be in the past";

    // Validation
    let isValid = true;
    if (birthDay > 31 || birthDay < 1) {
      isValid = false;
      document.getElementById("wrongDay").hidden = false;
    } else {
      document.getElementById("wrongDay").hidden = true;
    }
    if (birthMonth < 1 || birthMonth > 12) {
      isValid = false;
      document.getElementById("wrongMonth").hidden = false;
    } else {
      document.getElementById("wrongMonth").hidden = true;
    }
    if (birthYear < 1900 || birthYear > currentYear) {
      isValid = false;
      document.getElementById("wrongYear").hidden = false;
    } else {
      document.getElementById("wrongYear").hidden = true;
    }

    if (isValid) {
      let ageYears = currentYear - birthYear;
      let ageMonths = currentMonth - birthMonth;
      let ageDays = currentDay - birthDay;

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }

      if (ageDays < 0) {
        const previousMonthDate = new Date(currentYear, currentMonth - 1, 0);
        ageDays += previousMonthDate.getDate();
        ageMonths--;
      }

      ageYearOutput.textContent = `${ageYears}`;
      ageMonthOutput.textContent = `${ageMonths}`;
      ageDaysOutput.textContent = `${ageDays}`;
    } else {
      birthDayInput.style.borderColor = "hsl(0, 100%, 67%)";
      birthMonthInput.style.borderColor = "hsl(0, 100%, 67%)";
      birthYearInput.style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelectorAll(".error").forEach((word) => {
        word.style.color = "hsl(0, 100%, 67%)";
      });
      ageYearOutput.textContent = "--";
      ageMonthOutput.textContent = "--";
      ageDaysOutput.textContent = "--";
    }
  });
});
