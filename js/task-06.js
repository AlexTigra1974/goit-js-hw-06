const inputValid = document.querySelector("#validation-input");
console.dir(inputValid);

const inputLength = Number(inputValid.dataset.length);
console.log(inputLength);

inputValid.addEventListener("blur", onBlur);
function onBlur() {
  if (inputValid.value.length === inputLength) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
    console.log(inputValid.value.length);
  }
}
