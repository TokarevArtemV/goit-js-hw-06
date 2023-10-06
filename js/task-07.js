const root = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

root.addEventListener("input", changeSize);

spanText.style.fontSize = root.value+`px`;

function changeSize(event) {
  spanText.style.fontSize = event.target.value+`px`;
}

