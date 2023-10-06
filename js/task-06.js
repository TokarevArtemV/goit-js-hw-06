const root = document.querySelector("#validation-input");

root.addEventListener("blur", isValid);

function isValid(event) {
  const dataLength = event.target.attributes["data-length"].value;
  const isHasValid = !!(event.target.className === "valid");
  const isHasInvalid = !!(event.target.className === "invalid");

  if (event.target.value.length == dataLength) {
    isHasInvalid
      ? root.classList.replace("invalid", "valid")
      : root.classList.add("valid");
  } else if (event.target.value.length == 0) {
    root.classList.remove("valid");
    root.classList.remove("invalid");
  } else {
    isHasValid
      ? root.classList.replace("valid", "invalid")
      : root.classList.add("invalid");
  }
}
