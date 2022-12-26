const input = document.querySelector("input");
console.log(input);
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const btn = document.querySelectorAll("button");
console.dir(btn);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const width = 30;
const height = 30;
createBtn.addEventListener("clic", createBoxes);
// destroyBtn.addEventListener("clic", destroyBoxes);

const amount = Number(input.value);
function createBoxes(amount) {
  const boxEl = document.createElement("div");
  boxEl.style.width += 10`${width}px`;
  boxEl.style.height += 10`${width}px`;
  boxEl.style.backgroundColor = getRandomHexColor();
  return boxEl;
}
boxes.append(...boxEl);
