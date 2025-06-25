export function openPopup(popup) {
  popup.classList.add("popup_is-opened");

  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", handleEscClose);
}

export function openImgPopup(name, link) {
  const popupImage = document.querySelector(".popup_type_image");
  const popupImageElement = popupImage.querySelector(".popup__image");
  const popupImageCaption = popupImage.querySelector(".popup__caption");

  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupImageCaption.textContent = name;

  openPopup(popupImage);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closePopup(openedPopup);
  }
}

export function handleOverlayClose(popups) {
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (event) => {
      if (event.target === popup) closePopup(popup);
    });
  });
}
