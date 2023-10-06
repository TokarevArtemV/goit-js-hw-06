function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const root = document.body;
const btn = document.querySelector("button[class=change-color]");
const spanColor = document.querySelector("span[class=color]");

btn.addEventListener("click", changeBackground);

function changeBackground() {
  const newColor = getRandomHexColor();
  root.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}
