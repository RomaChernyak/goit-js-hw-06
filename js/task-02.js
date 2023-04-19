const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Task 2:
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// Solution:

const ingredientsList = document.getElementById('ingredients');

const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  
  // console.log(newItem);
  return ingredientsArray.push(newItem);
});

// console.log(ingredientsArray)

ingredientsList.append(...ingredientsArray);

// console.log(ingredientsList);