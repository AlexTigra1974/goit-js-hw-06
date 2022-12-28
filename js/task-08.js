const form = document.querySelector(".login-form");

form.addEventListener("submit", onLogin);

function onLogin(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені!");
  }
  password.value = "";
  email.value = "";
}
