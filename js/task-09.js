function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanContainerEl = document.querySelector('.color');
const changeButtonEl = document.querySelector('.change-color');
const body = document.body;

changeButtonEl.addEventListener('click', () => {
  const randColor = getRandomHexColor();
  spanContainerEl.textContent = randColor;

  body.style.backgroundColor = randColor;
});