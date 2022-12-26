const widget = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return (document.body.style.backgroundColor = span.textContent =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
