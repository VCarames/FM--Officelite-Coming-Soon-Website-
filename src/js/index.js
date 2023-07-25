function calculateCountdown() {
  const targetDate = new Date("November 4, 2023 00:00:00").getTime();

  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.querySelector(".number--days").textContent = days
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(calculateCountdown, 1000);

// FORM
const form = document.getElementById("signup__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const companyInput = document.getElementById("company");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  resetErrorMessages();

  if (!nameInput.value.trim()) {
    displayErrorMessage(nameInput, "Name cannot be blank.");
  }

  if (!isValidEmail(emailInput.value.trim())) {
    displayErrorMessage(emailInput, "Please enter a valid email address.");
  }

  if (!isValidPhone(phoneInput.value.trim())) {
    displayErrorMessage(phoneInput, "Please enter a valid phone number.");
  }

  if (!companyInput.value.trim()) {
    displayErrorMessage(companyInput, "Company cannot be blank.");
  }
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim()) {
    resetErrorMessages();
  }
});

emailInput.addEventListener("input", function () {
  if (isValidEmail(emailInput.value.trim())) {
    resetErrorMessages();
  }
});

phoneInput.addEventListener("input", function () {
  if (isValidPhone(phoneInput.value.trim())) {
    resetErrorMessages();
  }
});

companyInput.addEventListener("input", function () {
  if (companyInput.value.trim()) {
    resetErrorMessages();
  }
});

function displayErrorMessage(inputElement, errorMessage) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = errorMessage;
}

function resetErrorMessages() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((errorElement) => {
    errorElement.textContent = "";
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
