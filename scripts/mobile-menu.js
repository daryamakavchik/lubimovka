const burgerButton = document.querySelector(".burger-button");
const logo = document.querySelector(".logo");
const mobileMenuPopup = document.querySelector(".mobile-menu-popup");
const pagesNavigation = document
  .querySelector(".pages-navigation")
  .cloneNode(true);
const socialMedia = document.querySelector(".social-media").cloneNode(true);

// Обработчик открытия мобильного меню
function handleMobileMenu() {
  mobileMenuPopup.classList.toggle("mobile-menu-popup_open");
}

// Обработчик кнопки-гамбургера
function handleBurgerButton() {
  burgerButton.classList.toggle("burger-button_active");
  logo.classList.toggle("logo_mobile");
}

// Отрисовщик мобильного меню
function renderMobileMenu() {
  mobileMenuPopup.appendChild(pagesNavigation);
  mobileMenuPopup.appendChild(socialMedia);
  pagesNavigation.classList.add("pages-navigation_mobile");
  socialMedia.classList.add("social-media_mobile");
}

// Слушатель нажатия на кнопку-бургер
burgerButton.addEventListener("click", () => {
  handleBurgerButton();
  handleMobileMenu();
  renderMobileMenu();
});