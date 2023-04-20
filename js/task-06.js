// Task 6:
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// Solution:

const input = document.getElementById('validation-input');
const requiredDataLength = Number(input.getAttribute("data-length"));

// console.log(input);
// console.log(requiredDataLength);
// console.log(typeof requiredDataLength);

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
    const typedText = event.currentTarget.value;

    typedText.length === requiredDataLength
        ? input.classList.add('valid')
        : input.classList.add('invalid');
}
