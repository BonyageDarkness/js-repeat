/*
const box = document.querySelector(".box");

box.addEventListener("click", function (event) {
  console.log(event.target); // Елемент, на якому відбулась подія click
});
*/

/*
<p class="output">Selected color: -</p>
<div class="color-palette"></div>

const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
 	 if (event.target.nodeName !== "BUTTON") {
    return; // користувач клікнув між кнопками
  }

  const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ до її атрибутів
}
*/

/*
<p class="output">Selected color: -</p>
<div class="color-palette"></div>

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
*/

/*
uk.react.dev/learn
graphQL
Apollo Server
Приклади популярних бібліотек у JavaScript:

https://www.jsdelivr.com/
https://basiclightbox.electerious.com/ - модальное окно с эффектами появления
Chart.js: Бібліотека для створення інтерактивних графіків і діаграм.
Lodash: Бібліотека для роботи з масивами, об'єктами, рядками тощо, що надає безліч зручних функцій.
*/
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType1 = book.isPublic ? "pulbic" : "private";
const message1 = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType1} access!`;

// Деструктуризуємо
const { title, author, isPublic, rating } = book;

// Використовуємо
const accessType = isPublic ? "pulbic" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

///////////////////////////////////////////////////
const book1 = {
  title1: "The Last Kingdom",
  author1: "Bernard Cornwell",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title1,
  author1,
  coverImage = "https://via.placeholder.com/640/480",
  stats: { followers, views, likes },
} = book1;

console.log(title1); // "The Last Kingdom"
console.log(author1); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308
