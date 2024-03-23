const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const form = document.getElementById("signUpForm");

const isValidEmail = (email) => {
  const emailRegex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const removeErrorClasses = () => {
  errorMessage.classList.remove("showError");
  errorMessage.classList.add("noError");
  emailInput.classList.remove("error");
};

const showErrorClasses = () => {
  errorMessage.classList.remove("noError");
  errorMessage.classList.add("showError");
  emailInput.classList.add("error");
};

emailInput.addEventListener("input", () => {
  if (errorMessage.classList.contains("showError")) {
    removeErrorClasses();
  }
});

emailInput.addEventListener("blur", () => {
  const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    showErrorClasses();
  } else {
    removeErrorClasses();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (isValidEmail(email)) {
    localStorage.setItem("email", email);
    window.location.href = "confirm.html";
  }
});
