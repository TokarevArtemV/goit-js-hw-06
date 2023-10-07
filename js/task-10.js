function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");
const input = document.querySelector("input[type=number]");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", render);
btnDestroy.addEventListener("click", destroy);

function render() {
  createBoxes(input.value);
}

function createBoxes(amount) {
  const arr = [];

  for (let i = 30; i < 30 + amount * 10; i += 10) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.marginTop = "5px";

    arr.push(newDiv);
  }
  box.append(...arr);
}

function destroy() {
  box.innerHTML = "";
}
