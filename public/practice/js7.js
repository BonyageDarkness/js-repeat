//element.querySelector(selector);
//element.querySelectorAll(selector);
/*
<ul id="menu" class="menu">
  <li class="menu-item">home</li>
  <li class="menu-item">about</li>
  <li class="menu-item">gallery</li>
  <li>blog</li>
</ul>;

const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log(listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);
*/

/*
<a class="link" href="https://goit.global">GoIT</a>;

const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"
link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

*/

/*
<article class="article">
  <h2 class="article-title">Welcome to Hawaii!</h2>
  <p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat nemo veritatis quasi eius eum aliquid, nobis dolore nisi, magnam eaque iusto, necessitatibus atque laborum quam tempora ducimus dicta ipsam.</p>
</article>

const textEl = document.querySelector(".article-text");
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector(".article-title");
titleEl.textContent = 'Welcome to Bahamas!';
*/

/*  Метод classList.contains(className)
const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass = link.classList.contains("title"); // false

    Метод classList.add(className)
link.classList.add("special");
console.log(link.classList); 
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

    Метод classList.remove(className)
link.classList.remove("is-active");
console.log(link.classList); 
// ["link", "special", length: 2, value: "link special"]

    Метод classList.toggle(className)
link.classList.toggle("is-active");
console.log(link.classList); 
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

    Метод classList.replace(oldClassName, newClassName)
link.classList.replace("special", "regular");
console.log(link.classList); 
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

*/

/*
<button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button>

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

*/

/*
document.createElement(tagName)

const heading = document.createElement("h1");
heading.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
*/

/*
  <h1>Usernames</h1>
  <ul class="usernames">
    <li>Mango</li>
  </ul>

  const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);
*/

/*
<article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
<a class="link" href="">Read more</a>
</article>

const text = document.querySelector('.text');
text.remove();
*/

/*
 <section>
  <h2>Popular technologies</h2>
  <ul class="list"></ul>
</section>

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;


<article class="article">
  <h2>Article title</h2>
</article>

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
 */

/*
Властивості key і code

Властивість об’єкта події key повертає символ, 
згенерований натисканням клавіші на клавіатурі. 
Ця властивість враховує:
-стан клавіш-модифікаторів, наприклад Shift
-поточну мову
Властивість об’єкта події code повертає код фізичної
клавіші на клавіатурі й не залежить від мови та стану 
клавіш-модифікаторів.

document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});


<button type="button" class="js-clear">Clear output</button>
<div class="log-list"></div>

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn)

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

*/

/*          Події елементів форм
            Подія submit
const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
});



<form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form>

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

            Подія change
Подія change відбувається після зміни елемента форми.
Для текстових полів або textarea подія відбудеться не 
на кожному введенні символу, а після втрати фокусу. 
Це не завжди зручно. Уяви, що користувач набирає щось
 у текстовому полі — подія відсутня. Щойно фокус пропав, 
 відбудеться подія change.

 <p>
  Selected option text: <span class="text-output">none</span>
<p>
<p>
  Selected option value: <span class="value-output">none</span>
<p>

  <select class="pizza-select">
    <option value="four_meats">Four Meats</option>
    <option value="royal_cheese">Royal Cheese</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="smoked_salmon">Smoked Salmon</option>
  </select>

  const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}


            Подія input

Подія input відбувається тільки на текстових полях і textarea.

Вона створюється щоразу при зміні значення елемента, 
не чекаючи втрати фокусу. На практиці input — це 
найголовніша подія для роботи з текстовими полями форми.

<input type="text" class="text-input" />
<p>Text field value: <span class="output"></span></p>

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

            Подія focus і blur

ід час втрати фокусу — перевірити введені дані.



подія focus відбувається під час фокусування на елементі
подія blur відбувається при втраті фокусу, наприклад, 
користувач клікає в іншому місці екрана

<button type="button" data-action="set">Set focus to input</button>
<button type="button" data-action="remove">Remove focus from input</button>
<br><br>
<input type="text" class="text-input" />

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});









Підсумкова пам'ятка
Згадаємо та підсумуємо основні методи і властивості DOM-елементів, з якими ми будемо працювати далі:



Пошук DOM-елементів

element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.


Властивості DOM-елемента

element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
element.innerHTML - містить HTML-вміст елемента element.
element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.


CSS класи на DOM-елементах

element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
element.classList.add(className) - додає клас className до списку класів елемента element.
element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.


Створення та видалення DOM-елементів

document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
element.remove() - видаляє DOM-елемент з DOM дерева.
insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.


Події

element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
submit - подія, яка виникає при відправці форми.
change - подія, яка виникає при зміні значення елемента форми.
input - подія, яка виникає при введенні даних в текстове поле.
focus - подія, яка виникає, коли елемент отримує фокус.
blur - подія, яка виникає, коли елемент втрачає фокус.

*/
