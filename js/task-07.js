// Task 7:
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// Solution:

const refs = {
    input: document.getElementById('font-size-control'),
    changedWord: document.getElementById('text'),
};

refs.changedWord.style.fontSize = `${refs.input.value}px`

refs.input.addEventListener('input', onInputChange);

// console.log(refs.input);
// console.log(refs.changedWord);

function onInputChange(event) {
    const settledRange = event.currentTarget.valueAsNumber;
    console.log(settledRange);
    
    refs.changedWord.style.fontSize = `${settledRange}px`;
}