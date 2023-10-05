const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const root = document.querySelector("#ingredients");

function renderLiItems() {
  const murkUp = [];
  ingredients.forEach(element => {
    const liItem = document.createElement("li");
    liItem.textContent = element;
    liItem.className = "item";
    murkUp.push(liItem);
  });
  root.append(...murkUp)
}

renderLiItems();

