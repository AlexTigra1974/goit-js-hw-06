const count = document.querySelector("#value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

buttonDecrement.addEventListener("click", handleDecClick);
buttonIncrement.addEventListener("click", handleInClick);

function handleDecClick() {
  counterValue -= 1;
  count.textContent = counterValue;
}
function handleInClick() {
  counterValue += 1;
  count.textContent = counterValue;
}
