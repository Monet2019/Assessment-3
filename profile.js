const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    const buttonText = button.textContent;
    switch (buttonText) {
      case "My Favorite Color":
        alert("Green.");
        break;
      case "My Favorite Place":
        alert("Mexico.");
        break;
      case "My Favorite Ritual":
        alert("Pray before traveling.");
        break;
      default:
        break;
    }
  });
}