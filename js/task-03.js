const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Task 3:
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// Solution:

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ url, alt }) =>
  `<li>
    <img src=${url} alt=${alt}>
    </img>
  </li>`;

const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display:flex;")

// const galleryListArray = [];

// images.forEach(({ url, alt }) => {
//   const newLi = document.createElement('li');
//   const newImg = document.createElement('img');
  
//   newImg.url = url;
//   newImg.alt = alt;

//   console.log(newImg);

//   console.log(newLi);
  
//   newLi.insertAdjacentHTML("afterbegin", newImg);

//   console.log(newLi);
  
//   return galleryListArray.push(newLi);
// });

// console.log(ingredientsArray)

// galleryList.append(...galleryListArray);

// console.log(ingredientsList);оформлення галереї флексбоксами або грідами через CSS класи.

