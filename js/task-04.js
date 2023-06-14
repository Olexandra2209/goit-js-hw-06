const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let value = 0;

incrementBtn.addEventListener("click", function () {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener("click", function () {
  value -= 1;
  counterValue.textContent = value;
});
