const root = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

root.addEventListener("input", changeSize);

function changeSize(event) {
  console.log(spanText.style.fontSize);
  spanText.style.fontSize = event.target.value+`px`;
}

