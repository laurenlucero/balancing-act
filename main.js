console.log("Yay I started my JavaScript")

var closeWelcome = document.querySelector('.welcome');
var closeButton = document.querySelector('.close');
var menu1 = document.querySelector('.menu1');
var menu2 = document.querySelector('.menu2');
var menu3 = document.querySelector('.menu3');
var dashboard = document.querySelector('.dashboard');

closeButton.addEventListener('click', welcomeDisappear);

function welcomeDisappear() {
  closeWelcome.style.display = "none";
}

menu1.addEventListener('click', highlightMenu1);
menu2.addEventListener('click', highlightMenu2);
menu3.addEventListener('click', highlightMenu3);

function highlightMenu1() {
  menu2.classList.remove('highlight-menu');
  menu3.classList.remove('highlight-menu');
  menu1.classList.add('highlight-menu');
  dashboard.classList.remove('is-hidden');
}

function highlightMenu2() {
  menu1.classList.remove('highlight-menu');
  menu3.classList.remove('highlight-menu');
  menu2.classList.add('highlight-menu');
  dashboard.classList.add('is-hidden');
}

function highlightMenu3() {
  menu1.classList.remove('highlight-menu');
  menu2.classList.remove('highlight-menu');
  menu3.classList.add('highlight-menu');
}
