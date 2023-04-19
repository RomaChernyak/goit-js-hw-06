// Task 1:
// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Solution:
const categoriesRef = document.querySelector('#categories');
const categoriesRefByItem = Array.from(categoriesRef.children);

// console.log(categoriesEl)
// console.log(categoriesRefByItem);

console.log('Number of categories: ', categoriesRefByItem.length)

categoriesRefByItem.forEach((category) => {
    const categoryName = category.firstElementChild.textContent;
    const categoryListLength = category.lastElementChild.children.length;
    
    console.log('Category: ', categoryName);
    console.log('Elements: ', categoryListLength);
});