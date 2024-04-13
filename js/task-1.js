const categoryList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((item) => {
  const title = item.querySelector("h2").textContent;

  const elements = item.querySelectorAll("li");

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
