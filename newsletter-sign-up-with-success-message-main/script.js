document.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email");
  let subscribeBtn = document.getElementById("subscribeBtn");
  let alertMessage = document.getElementById("term-alert");

  function validateEmail(emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
  }

  // Add event listener to subscribe button
  subscribeBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateEmail(email.value)) {
      let sub = document.getElementById("sub");
      let home = document.getElementById("home");
      if (sub && home) {
        sub.classList.remove("hidden");
        home.classList.add("hidden");
        document.getElementById("emailname").innerText = email.value + ".";
        document.getElementById("emailname").style.fontWeight = "bold";
        email.value = "";
        alertMessage.classList.add("hidden");
      } else {
        console.error("Sub or home element not found.");
      }
    } else {
      email.style.borderColor = "red";
      email.style.backgroundColor = "hsl(4, 67%, 76%)";
      email.style.color = "red";
      alertMessage.classList.remove("hidden");
    }
  });

  document.getElementById("dismiss").addEventListener("click", () => {
    let sub = document.getElementById("sub");
    let home = document.getElementById("home");
    if (sub && home) {
      sub.classList.add("hidden");
      home.classList.remove("hidden");
    } else {
      console.error("Sub or home element not found.");
    }
  });
});
