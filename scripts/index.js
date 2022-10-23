const burgerButton = document.querySelector('.burger-button');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const pagesNavigation = document.querySelector('.pages-navigation').cloneNode(true);
const socialMedia = document.querySelector('.social-media').cloneNode(true);
const photoPopup = document.querySelector('.photo-popup');
const photoPopupImage = document.querySelector('.photo-popup__image');
const galleryImages = Array.from(document.querySelectorAll('.gallery__image'));
const photoPopupCloseButton = document.querySelector('.photo-popup__close-button');

function handleMobileMenu() {
  mobileMenuPopup.classList.toggle('mobile-menu-popup_open');
}

function handleBurgerButton() {
  burgerButton.classList.toggle('burger-button_active');
}

function renderMobileMenu() {
  mobileMenuPopup.appendChild(pagesNavigation);
  mobileMenuPopup.appendChild(socialMedia);
  pagesNavigation.classList.add('pages-navigation_mobile');
  socialMedia.classList.add('social-media_mobile');
}

burgerButton.addEventListener('click', () => {
  handleBurgerButton();
  handleMobileMenu();
  renderMobileMenu();
});

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add(`photo-popup_opened`);
  document.addEventListener('keydown', closePopupByEscapeButton);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove(`photo-popup_opened`);
  document.removeEventListener('keydown', closePopupByEscapeButton);
}

// Функция закрытия попапа кнопкой Escape
function closePopupByEscapeButton(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(`.photo-popup_opened`);
    closePopup(openedPopup);
  }
}

//Функция открытия полноразмерного фото
function openGalleryImage(image) {
  photoPopupImage.src = image.src;
}

//Слушатель нажатия на фото галереи
galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener('click', () => {
    openPopup(photoPopup);
    openGalleryImage(galleryImage);
  });
});

//Слушатель кнопки закрытия попапа
photoPopupCloseButton.addEventListener('click', () => {
  closePopup(photoPopup);
});