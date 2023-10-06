const root = document.querySelector("#validation-input");

root.addEventListener("blur", isValid);

function isValid(event) {
  const dataLength = event.target.attributes["data-length"].value;
  if (event.target.value.length == dataLength) {
    root.classList.contains("invalid")
      ? root.classList.remove("invalid")
      : root.classList.add("valid");
    root.classList.add("valid");
  } else {
    root.classList.contains("valid")
      ? root.classList.remove("valid")
      : root.classList.add("invalid");
    root.classList.add("invalid");
  }
}
