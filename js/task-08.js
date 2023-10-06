const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if ((email && password) === "") {
    alert("Все поля должны быть заполнены");
    return;
  }
  const user = {
    email,
    password,
  };

  console.log(user);
  event.target.reset();
}
