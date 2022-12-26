const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  // console.log(li);
  li.classList = "item";
  li.textContent = ingredient;
  return li;
});
list.append(...ingredientEl);

list.style.listStyle = "none";
