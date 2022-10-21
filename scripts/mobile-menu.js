const burgerButton = document.querySelector('.burger-button');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const pagesNavigation = document.querySelector('.pages-navigation').cloneNode(true);
const socialMedia = document.querySelector('.social-media').cloneNode(true);

function mobileMenuHandler() {
  mobileMenuPopup.classList.toggle('mobile-menu-popup_open');
}

function renderMobileMenu() {
  mobileMenuPopup.appendChild(pagesNavigation);
  mobileMenuPopup.appendChild(socialMedia);
  pagesNavigation.classList.add('pages-navigation_mobile');
  socialMedia.classList.add('social-media_mobile');
}

burgerButton.addEventListener('click', () => {
  mobileMenuHandler();
  renderMobileMenu();
});