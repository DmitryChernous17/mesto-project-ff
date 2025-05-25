// @todo: Темплейт карточки
const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = createCard(card);
    placesList.append(cardElement);
  });
}

renderCards();

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
