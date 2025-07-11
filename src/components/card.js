import { openImgPopup } from "./modal.js";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(card, handleLike, handleImagePopup, handleDelete) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () =>
    handleImagePopup(card.name, card.link)
  );
  likeButton.addEventListener("click", handleLike);
  deleteButton.addEventListener("click", () => handleDelete(cardElement));

  return cardElement;
}

export function pushLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

export function deleteCard(cardElement) {
  cardElement.remove();
}
