const hamburger = document.querySelector('.hamburger-icon');
const Dropdownmenu = document.querySelector('.hidden-menu');
const closeMenu = document.querySelector('.dropdown-x-icon');
const hidemenu = document.getElementsByClassName('nav-dropdown-item-link');
hamburger.addEventListener('click',function() {
    Dropdownmenu.classList.add("show");});
    const remove = function() {
        Dropdownmenu.classList.remove("show");}
    closeMenu.addEventListener('click',remove);
for (let i = 0; i < hidemenu.length; i++) {
    hidemenu[i].addEventListener('click', remove);
  }