var closeWelcome = document.querySelector('.welcome');
var closeButton = document.querySelector('.close');
var menu1 = document.querySelector('.menu1');
var menu2 = document.querySelector('.menu2');
var menu3 = document.querySelector('.menu3');
var dashboard = document.querySelector('.dashboard');
var transactions = document.querySelector('.transactions');

closeButton.addEventListener('click', welcomeDisappear);
menu1.addEventListener('click', highlightMenu1);
menu2.addEventListener('click', highlightMenu2);
menu3.addEventListener('click', highlightMenu3);

function welcomeDisappear() {
  closeWelcome.style.display = "none";
}

function highlightMenu1() {
  menu2.classList.remove('highlight-menu');
  menu3.classList.remove('highlight-menu');
  menu1.classList.add('highlight-menu');
  dashboard.hidden = false;
  transactions.hidden = true;
}

function highlightMenu2() {
  menu1.classList.remove('highlight-menu');
  menu3.classList.remove('highlight-menu');
  menu2.classList.add('highlight-menu');
  dashboard.hidden = true;
  transactions.hidden = false;
}

function highlightMenu3() {
  menu1.classList.remove('highlight-menu');
  menu2.classList.remove('highlight-menu');
  menu3.classList.add('highlight-menu');
}
