const form = document.querySelector(".login-form");

form.addEventListener("submit", onLogin);

function onLogin(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені!");
  }
  event.currentTarget.reset();
}
