const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateName);

function updateName() {
  nameOutput.textContent = this.value === "" ? "Anonymous" : this.value;
}
