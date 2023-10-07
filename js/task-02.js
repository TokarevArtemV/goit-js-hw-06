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
  const murkup = ingredients.map((element) => {
    const liItem = document.createElement("li");
    liItem.textContent = element;
    liItem.className = "item";
    return liItem;
  });

  root.append(...murkup);
}

renderLiItems();
