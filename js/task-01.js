const category = document.querySelectorAll(".item");
console.log("Number of categories: ", category.length);

category.forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
});
