// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//     email.reportValidity();
//   } else {
//     email.setCustomValidity("");
//   }
// });


// const form = document.querySelector("form");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", (event) => {
//   if(email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//   } else {
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   if(!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   if(email.validity.valueMissing) {
//     emailError.textContent = "You need to enter and e-mail address."
//   } else if(email.validity.typeMismatch) {
//     emailError.textContent = "Entered value needs to be an e-mail address."
//   } else if(email.validity.tooShort) {
//     emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
//   }
//   emailError.classList = "error active";
// }

const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
  const isValid = email.ariaValueMax.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if(isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if(!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an e-mail, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
})