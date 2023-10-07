const root = document.querySelector("#validation-input");

root.addEventListener("blur", isValid);

function isValid(event) {
  const dataLength = event.target.attributes["data-length"].value;
  const isHasValid = !!(event.target.className === "valid");
  const isHasInvalid = !!(event.target.className === "invalid");
  const numSymbol = event.target.value.trim().length;

  if (event.target.value.includes(" ")) {
    alert("Enter characters without spaces");
    event.target.value = "";
    clearClass();
    return;
  }

  if (numSymbol == dataLength) {
    isHasInvalid
      ? root.classList.replace("invalid", "valid")
      : root.classList.add("valid");
  } else if (numSymbol == 0) {
    clearClass();
  } else {
    isHasValid
      ? root.classList.replace("valid", "invalid")
      : root.classList.add("invalid");
  }
}

function clearClass() {
  root.classList.remove("valid");
  root.classList.remove("invalid");
}