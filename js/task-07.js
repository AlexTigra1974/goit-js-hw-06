const fontSizeCont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// console.dir(fontSizeCont);
fontSizeCont.addEventListener("input", onChange);
function onChange() {
  text.style.fontSize = `${fontSizeCont.value}.px`;
}
