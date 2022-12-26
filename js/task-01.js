const cat = document.querySelectorAll(".item");
console.log("Number of categories:", cat.length);

cat.forEach((element) => {
  const title = element.querySelector("h2");
  const elem = element.querySelectorAll("li");
  console.log("Category:", title.textContent);
  console.log("Elements:", elem.length);
});
