function checkPassword() {
    var passwordInput = document.getElementById("passwordInput");
    var errorMessage = document.getElementById("errorMessage");
    var password = passwordInput.value;
  
    if (password === "") {
      errorMessage.textContent = "Пожалуйста, введите пароль";
    } else if (password === "4321") {
      window.location.href = "menu.html";
    } else {
      errorMessage.textContent = "Неверный пароль";
    }
  }
  