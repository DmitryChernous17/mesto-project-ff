export function openPopup(popup) {
  popup.classList.add("popup_is-opened");

  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", handleEscClose);
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