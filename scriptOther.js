function findRoomByDoc() {
  var idDocInput = document.getElementById("idDocInput");
  var roomMessage = document.getElementById("roomMessage");
  var roomButtons = document.getElementById("roomButtons");
  var idDoc = idDocInput.value;

  if (/^М\d+$/.test(idDoc)) { //если начинается с "М", то
    roomMessage.textContent = "Ваша папка находится в помещении 5.1.2.\nПосмотреть схему?";
    roomButtons.style.display = "block"; // Показать кнопки
  } else if (/^\d+$/.test(idDoc)) {
    var num = parseInt(idDoc);
    if (num > 0 && num < 1001) {
      roomMessage.textContent = "Ваша папка находится в помещении 7.1.16.\nПосмотреть схему?";
      roomButtons.style.display = "block"; // Показать кнопки
    } else if (num > 1000 && num < 2001) {
      roomMessage.textContent = "Ваша папка находится в помещении 5.1.2.\nПосмотреть схему?";
      roomButtons.style.display = "block"; // Показать кнопки
    } else if (num > 2000 && num < 3001) {
      roomMessage.textContent = "Ваша папка находится в \"Стекляшке\".\nПосмотреть схему?";
      roomButtons.style.display = "block"; // Показать кнопки
    } else {
      roomMessage.textContent = "Ваша папка находится в 4 помещении.\nПосмотреть схему?";
      roomButtons.style.display = "block"; // Показать кнопки
    }
  } else {
    roomMessage.textContent = "Пожалуйста, введите номер папки корректно";
    roomButtons.style.display = "none"; // Скрыть кнопки
  }
}

function goToRoom() {
  var idDocInput = document.getElementById("idDocInput");
  var idDoc = idDocInput.value;

  if (idDoc.startsWith("М")) {
    window.location.href = "rooms/room2.html";
  } else if (/^\d+$/.test(idDoc)) {
    var num = parseInt(idDoc);
    if (num > 0 && num < 1001) {
      window.location.href = "rooms/room1.html";
    } else if (num > 1000 && num < 2001) {
      window.location.href = "rooms/room2.html";
    } else if (num > 2000 && num < 3001) {
      window.location.href = "rooms/room3.html";
    } else {
      window.location.href = "rooms/room4.html";
    }
  }
}

function DoNotGoToRoom() {
  location.reload(); // Перезагрузить страницу
}
