// Task 5:
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Solution:

const refs = {
    input: document.getElementById('name-input'),
    outputName: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const typedText = event.currentTarget.value;
    
    if (typedText === "") {
        refs.outputName.textContent = 'Anonymous';
    } else {refs.outputName.textContent = typedText;}
}