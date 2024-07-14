let defaultText = document.getElementById("default-text");
let calculationsContainer = document.getElementById("calculations-container");
let calculateButton = document.getElementById("calculate-btn");
let amountDiv = document.getElementsByClassName("amount")[0];
let amountSymbol = document.getElementById("amount");
let yearsDiv = document.getElementsByClassName("years")[0];
let yearsSymbol = document.getElementById("years");
let persentageDiv = document.getElementsByClassName("persentage")[0];
let persentageSymbol = document.getElementById("persentage");
document.querySelectorAll(".mortgage-type").forEach((input) => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".radio-inputs").forEach((div) => {
      div.classList.remove("selected");
    });
    if (this.checked) {
      this.parentElement.classList.add("selected");
    }
  });
});
document.getElementById("mortgage-term").addEventListener("checked", () => {
  document.getElementById("mortgage-term").style.backgroundColor = "white";
});
document.getElementById("amountMain").addEventListener("click", () => {
  amountDiv.style.backgroundColor = "yellow";
  amountSymbol.style.backgroundColor = "yellow";
});

document.getElementById("termMain").addEventListener("click", () => {
  yearsDiv.style.backgroundColor = "yellow";
  yearsSymbol.style.backgroundColor = "yellow";
});
document.getElementById("rate-main").addEventListener("click", () => {
  persentageDiv.style.backgroundColor = "yellow";
  persentageSymbol.style.backgroundColor = "yellow";
});
calculateButton.addEventListener("click", () => {
  let amount = parseFloat(document.getElementById("mortgage-amount").value);
  let term = parseFloat(document.getElementById("mortgage-term").value);
  let rate = parseFloat(document.getElementById("rate").value) / 100;
  let mortgageType = document.querySelector(
    'input[name="mortgage-type"]:checked'
  );

  console.log(
    `amount: ${amount}, term: ${term}, rate: ${rate}, mortgageType: ${
      mortgageType ? mortgageType.value : "none"
    }`
  );

  let isValid = true;
  document.querySelectorAll(".formContiner").forEach((el) => {
    el.classList.remove("error");
  });

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("amount-alert").style.display = "block";
    document.getElementById("amountMain").classList.add("error");
    document.getElementById("amountMain").style.border = "1px solid red";
    amountDiv.style.backgroundColor = "red";
    amountDiv.style.color = "white";

    amountSymbol.style.backgroundColor = "red";

    isValid = false;
  } else {
    document.getElementById("amount-alert").style.display = "none";
  }

  if (isNaN(term) || term <= 0) {
    document.getElementById("term-alert").style.display = "block";
    document.getElementById("termMain").classList.add("error");
    document.getElementById("termMain").style.border = "1px solid red";
    yearsDiv.style.backgroundColor = "red";
    yearsSymbol.style.backgroundColor = "red";

    isValid = false;
  } else {
    document.getElementById("term-alert").style.display = "none";
  }

  if (isNaN(rate) || rate <= 0) {
    document.getElementById("rate-alert").style.display = "block";
    document.getElementById("rate-main").style.border = "1px solid red";
    persentageDiv.style.backgroundColor = "red";
    persentageSymbol.style.backgroundColor = "red";

    document.getElementById("rate-main").classList.add("error");
    isValid = false;
  } else {
    document.getElementById("rate-alert").style.display = "none";
  }

  if (!mortgageType) {
    document.getElementById("type-alert").style.display = "block";
    document.querySelectorAll(".radio-inputs").forEach((el) => {
      el.classList.add("error");
    });
    isValid = false;
  } else {
    document.getElementById("type-alert").style.display = "none";
    document.querySelectorAll(".radio-inputs").forEach((el) => {
      el.classList.remove("error");
    });
  }

  if (isValid) {
    let monthlyPayment = 0;
    let totalRepayment = 0;
    document.getElementsByClassName(
      "calculations-container"
    )[0].style.textAlign = "left";
    if (mortgageType.value === "repayment") {
      let monthlyRate = rate / 12;
      let n = term * 12;
      monthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
      totalRepayment = monthlyPayment * n;
    } else if (mortgageType.value === "interest-only") {
      monthlyPayment = (amount * rate) / 12;
      totalRepayment = monthlyPayment * term * 12;
    }

    document.getElementById("result").innerText = `£${monthlyPayment.toFixed(
      2
    )}`;
    document.getElementById(
      "term-result"
    ).innerText = `£${totalRepayment.toFixed(2)}`;
    document.getElementById("default-text").hidden = true;
    document.getElementById("calculations-container").hidden = false;
  } else {
    document.getElementById("result").innerText = "";
    document.getElementById("term-result").innerText = "";
  }
});

document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("form").reset();
  document.getElementById("result").innerText = "";
  document.getElementById("term-result").innerText = "";
  document.querySelectorAll(".alert").forEach((alert) => {
    alert.style.display = "none";
  });

  document.getElementById("default-text").hidden = false;
  document.getElementById("calculations-container").hidden = true;

  document.querySelectorAll(".radio-inputs").forEach((div) => {
    div.classList.remove("selected");
  });

  document.querySelectorAll(".formContiner").forEach((el) => {
    el.classList.remove("error");
  });
});

document.querySelectorAll(".alert").forEach((alert) => {
  alert.style.display = "none";
});
