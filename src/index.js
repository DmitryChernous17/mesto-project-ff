import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, pushLike } from "./components/card.js";
import {
  openPopup,
  closePopup,
  handleOverlayClose,
  openImgPopup,
} from "./components/modal.js";
import avatar from "./images/avatar.jpg";

const placesList = document.querySelector(".places__list");
const profileImage = document.querySelector(".profile__image");

// Попапы
const popups = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_new-card");

// Кнопки
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close");

//формы
const profileForm = document.querySelector(".popup_type_edit .popup__form");
const cardForm = document.querySelector(".popup_type_new-card .popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardName = document.querySelector(".popup__input_type_card-name");
const cardImg = document.querySelector(".popup__input_type_url");

//аватар
profileImage.style.backgroundImage = `url(${avatar})`;

// Карточки
function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, pushLike, openImgPopup, deleteCard);
    placesList.append(cardElement);
  });
}

//открытие и закрытие попапов
popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
});

profileAddButton.addEventListener("click", () => openPopup(popupAdd));

handleOverlayClose(popups);

//функции форм
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: cardName.value,
    link: cardImg.value,
  };

  const cardElement = createCard(newCard, pushLike, openImgPopup, deleteCard);
  placesList.prepend(cardElement);

  cardForm.reset();

  closePopup(popupAdd);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

renderCards();
