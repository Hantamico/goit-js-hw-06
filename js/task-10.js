function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesContainerEl = document.getElementById('boxes');

createBtnEl.addEventListener('click', () => {
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < inputEl.value; i++){
    const box = document.createElement('div')
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  boxesContainerEl.append(...boxes);

});
destroyBtnEl.addEventListener('click', () => {
  boxesContainerEl.innerHTML = '';
});
