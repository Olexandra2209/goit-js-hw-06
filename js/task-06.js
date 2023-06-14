const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const desiredLength = parseInt(this.getAttribute("data-length"));
  const inputValue = this.value.length;

  if (inputValue === desiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
