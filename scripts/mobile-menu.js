const burgerButton = document.querySelector('.burger-button');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const pagesNavigation = document.querySelector('.pages-navigation').cloneNode(1);

function mobileMenuHandler() {
  mobileMenuPopup.classList.toggle('mobile-menu-popup_open');
}

function renderMobileMenu() {
  mobileMenuPopup.appendChild(pagesNavigation);
}

burgerButton.addEventListener('click', () => {
  mobileMenuHandler();
  renderMobileMenu();
});