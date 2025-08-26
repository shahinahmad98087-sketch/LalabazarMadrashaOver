document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const usernameInput = document.getElementById('username');
  const loginContainer = document.getElementById('login-container');
  const mainContainer = document.getElementById('main-container');
  const greeting = document.getElementById('greeting');

  loginBtn.addEventListener('click', function() {
    const name = usernameInput.value.trim();
    if(name.length === 0) {
      usernameInput.classList.add('error');
      usernameInput.placeholder = "Please enter your name!";
      return;
    }
    greeting.textContent = `Hello, ${name}!`;
    loginContainer.style.display = "none";
    mainContainer.style.display = "flex";
  });

  usernameInput.addEventListener('input', function() {
    usernameInput.classList.remove('error');
    usernameInput.placeholder = "Your Name";
  });

  logoutBtn.addEventListener('click', function() {
    usernameInput.value = "";
    mainContainer.style.display = "none";
    loginContainer.style.display = "flex";
  });
});
