const photoPopup = document.querySelector(".photo-popup");
const photoPopupImage = document.querySelector(".photo-popup__image");
const galleryImages = Array.from(document.querySelectorAll(".gallery__image"));
const photoPopupFlipButtonDirectionRight = document.querySelector(
  ".photo-popup__flip-button_direction_right"
);
const photoPopupFlipButtonDirectionLeft = document.querySelector(
  ".photo-popup__flip-button_direction_left"
);
let indexOfGalleryImage;

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add(`photo-popup_opened`);
  document.addEventListener("keydown", closePopupByEscapeButton);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove(`photo-popup_opened`);
  document.removeEventListener("keydown", closePopupByEscapeButton);
}

// Функция закрытия попапа кнопкой Escape
function closePopupByEscapeButton(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(`.photo-popup_opened`);
    closePopup(openedPopup);
  }
}

// Обработчик закрытия попапа кнопкой закрытия или кликом по оверлею

photoPopup.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("photo-popup_opened") ||
    evt.target.classList.contains("photo-popup__close-button")
  ) {
    closePopup(photoPopup);
  }
});

//Функция открытия полноразмерного фото
function openGalleryImage(image) {
  photoPopupImage.src = image.src;
}

//Функция блокировки кнопки "влево" у первого фото
function removeButtonOfFirstImage(indexOfImage) {
  if (indexOfImage === 0) {
    photoPopupFlipButtonDirectionLeft.classList.add('photo-popup__flip-button_hidden');
  } else {
    photoPopupFlipButtonDirectionLeft.classList.remove('photo-popup__flip-button_hidden');
  }
}

//Функция блокировки кнопки "вправо" у последнего фото
function removeButtonOfLastImage(indexOfImage) {
  if (indexOfImage === galleryImages.length - 1) {
    photoPopupFlipButtonDirectionRight.classList.add('photo-popup__flip-button_hidden');
  } else {
    photoPopupFlipButtonDirectionRight.classList.remove('photo-popup__flip-button_hidden');
  }
} 

//Слушатель нажатия на фото галереи
galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener("click", () => {
    openPopup(photoPopup);
    openGalleryImage(galleryImage);
    indexOfGalleryImage = galleryImages.indexOf(galleryImage);
    removeButtonOfFirstImage(indexOfGalleryImage);
    removeButtonOfLastImage(indexOfGalleryImage);
  });
});

// Обработчик кнопки "листать фото вправо"
photoPopupFlipButtonDirectionRight.addEventListener("click", () => {
  photoPopupImage.src = galleryImages[indexOfGalleryImage + 1].src;
  indexOfGalleryImage = indexOfGalleryImage + 1;
  removeButtonOfFirstImage(indexOfGalleryImage);
  removeButtonOfLastImage(indexOfGalleryImage);
});

// Обработчик кнопки "листать фото влево"
photoPopupFlipButtonDirectionLeft.addEventListener("click", () => {
  photoPopupImage.src = galleryImages[indexOfGalleryImage - 1].src;
  indexOfGalleryImage = indexOfGalleryImage - 1;
  removeButtonOfFirstImage(indexOfGalleryImage);
  removeButtonOfLastImage(indexOfGalleryImage);
});