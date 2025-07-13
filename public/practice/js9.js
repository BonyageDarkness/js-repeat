const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
//
//
//
const json1 = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog1 = JSON.parse(json1);
console.log(dog1); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog1.name); // "Mango"
//
//
//
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");
//
//
//
localStorage.setItem("ui-theme", "dark");
console.log(localStorage); // Storage {ui-theme: "light", length: 1}
//
//      Додавання складних даних
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
//
//      Получение данных
const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"
//
//
const settings1 = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings1", JSON.stringify(settings1));

const savedSettings = localStorage.getItem("settings1");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
//
//      Видалення даних
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null
//
//
//
//        Кейс: Форма з повідомленням
/*

<form class="feedback-form">
  <textarea name="message"></textarea>
  <button type="submit">Send feedback</button>
</form>

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});



*/
