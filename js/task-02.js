const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`ul#ingredients`);

for (const ingredient of ingredients) {
  const ingredientItemEl =
    document.createElement(`li`);
    ingredientItemEl.textContent = ingredient;
  listEl.append(ingredientItemEl);
}
