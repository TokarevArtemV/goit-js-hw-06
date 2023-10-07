const root = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

root.addEventListener('input', inputText);

function inputText(event) {
    event.target.value === ""
      ? (nameOutput.textContent = "Anonymous")
      : (nameOutput.textContent = (event.target.value).trim());
}
;