function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Task 9:
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// Solution:

const bodyRef = document.querySelector('body');
const spanColorIndicator = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

colorChangeBtn.addEventListener('click', handleTargetBtnClick);

function handleTargetBtnClick() {
  const currentBackgroundColor = getRandomHexColor()
  
  bodyRef.style.backgroundColor = currentBackgroundColor;
  spanColorIndicator.textContent = currentBackgroundColor;
}