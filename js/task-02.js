const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ulEl = document.getElementById("ingredients");
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ulEl.appendChild(liEl);
}
