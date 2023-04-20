// Task 4:
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Solution:

let counterValue = document.getElementById('value');
counterValue.textContent = 0;

const refs = {
    counterEl: document.getElementById('counter'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
        if (this.value < 0) {
            this.value = 0;
            
            const message = document.createElement('p');
            message.textContent = "Please, don't play with me! I'm a counter, not a joke!";

            refs.counterEl.appendChild(message);
        }
    }
}

refs.decrementBtn.addEventListener('click', (event) => {
    counter.decrement();

    counterValue.textContent = counter.value;
})

refs.incrementBtn.addEventListener('click', (event) => {
    counter.increment();

    counterValue.textContent = counter.value;
})