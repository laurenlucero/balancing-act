console.log("Yay I started my JavaScript")

var closeWelcome = document.querySelector('.welcome');
var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', welcomeDisappear);

function welcomeDisappear() {
  closeWelcome.style.display = "none";
}
