const category = document.querySelectorAll(".item");

console.log(`Number of categories: ${category.length}`);

category.forEach((element) => {
  const categories = element.querySelector("h2").textContent;
  const elements = element.querySelectorAll("li").length;
  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elements}`);
});
