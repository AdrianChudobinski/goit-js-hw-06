"use strict";

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const validLength = validationInput.dataset.length;
  const inputValue = validationInput.value;
  const isValid = inputValue.length === Number(validLength);

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
