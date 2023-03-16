const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`ul#ingredients`);
const listArr = []

for (const ingredient of ingredients) {
  
  const ingredientItemEl =
    document.createElement(`li`);
    ingredientItemEl.textContent = ingredient;
  listArr.push(ingredientItemEl);
}

listEl.append(...listArr);
