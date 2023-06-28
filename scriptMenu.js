function navigateTo(url) {
  window.location.href = url;
}

function navigateToRoom(selectElement) {
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var url = selectedOption.value;
  if (url) {
    window.location.href = "rooms/" + url;
  }
}

