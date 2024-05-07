const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const form = document.getElementById("signUpForm");

const isValidEmail = (email) => {
  if (email.length === 0) {
    return false;
  }
  const emailRegex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const removeErrorClasses = () => {
  errorMessage.classList.remove("showError");
  errorMessage.classList.add("noError");
};

const showErrorClasses = () => {
  errorMessage.classList.remove("noError");
  errorMessage.classList.add("showError");
};

const handleEmailChange = () => {
  const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    showErrorClasses();
  } else {
    removeErrorClasses();
  }
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleEmailChange();
});

emailInput.addEventListener("input", () => {
  if (errorMessage.classList.contains("showError")) {
    removeErrorClasses();
  }
});

emailInput.addEventListener("blur", () => {
  handleEmailChange();
});
