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
const color = getRandomHexColor();
createBtn.addEventListener("clic", createBoxes);
// destroyBtn.addEventListener("clic", destroyBoxes);
const amount = Number(input.value);

const box = [];
function createBoxes() {
  for (let i = 0; i <= amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${width + 10}px`;
    boxEl.style.height = `${height + 10}px`;
    boxEl.style.backgroundColor = color;

    box.push(boxEl);
  }
  console.log(box);

  //   return boxEl;
}
boxes.append(...box);
