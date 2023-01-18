const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.getElementById("ingredients");
// for (const ingredient of ingredients) {
//   const ulEl = document.getElementById("ingredients");
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   ulEl.appendChild(liEl);
// }

const listIngredients = ingredients.map( ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`
  return liEl
});
ulEl.append(...listIngredients)