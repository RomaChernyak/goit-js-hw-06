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
    // 1. Перед перевіркою на правильність введення необхідної кількості символів прибираємо атрибут class на випадок, якщо принаймні один раз ми вже ініціалізовували подію blur (і, відповідно, додавався один з CSS-класів 'valid' чи 'invalid')
    input.removeAttribute('class');
    
    // 2. Таку ж само перевірку ми можемо зробити, але не видаляючи взагалі атрибут class, а очищуючи одне з наявних в ньому значень - 'valid' чи 'invalid' (див. рядки 25-31)
    // if (input.classList.contains('valid')) {
    //     input.classList.remove('valid');
    // }

    // if (input.classList.contains('invalid')) {
    //     input.classList.remove('invalid');
    // }
    
    const typedText = event.currentTarget.value;

    typedText.length === requiredDataLength
        ? input.classList.add('valid')
        : input.classList.add('invalid');
    
    // console.log(input);
}
