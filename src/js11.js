/*Як працює цей код?

fetch() відправляє запит на сервер і повертає проміс.
then(response => {...}) виконується, коли відповідь отримано.
then(data => {...}) обробляє отримані дані.
catch(error => {...}) виконується у разі помилки.

200 (OK) — стандартна відповідь для успішних HTTP-запитів.
201 (Created) — стандартна відповідь для HTTP-запиту, який привів до успішного створення ресурсу.
400 (Bad Request) — запит не може бути оброблений через неправильний синтаксис запиту або іншу помилку клієнта.
401 (Unauthorized) — для доступу до ресурсу вимагається авторизація.
403 (Forbidden) — у клієнта немає дозволу на доступ до цього ресурсу.
404 (Not Found) — у цей час ресурс не знайдений. Можливо, він був видалений або ще не існує.
500 (Internal Server Error) — загальна відповідь на непередбачений збій сервера, якщо відсутня конкретніша інформація.

POST — створює новий ресурс.
GET — отримує набір ресурсів або один ресурс.
PUT — оновлює існуючий ресурс або створює новий.
PATCH — частково оновлює існуючий ресурс.
DELETE — видаляє ресурс.


*/

const options = {
  method: "GET",
};

fetch("some-url", {
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
  },
});

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}

// Сортировка
/* 
Повертає 7 користувачів (замість 10, які є за замовчуванням).
Відсортовує їх за полем name в алфавітному порядку.

fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")

*/

import axios from "axios";

/* Axios делать http запрос и возвращает объект ответа:
{
  data: {},       // Відповідь від сервера
  status: 200,    // Код стану HTTP
  statusText: "OK", // Текстовий опис статусу
  headers: {},    // Заголовки відповіді
  config: {},     // Конфігурація запиту
  request: {}     // Об'єкт самого запиту
}

data — містить тіло відповіді від сервера.
status — HTTP-код відповіді (наприклад, 200 для успішного запиту).
statusText — текстове повідомлення, пов’язане з кодом статусу.
headers — об'єкт HTTP-заголовків, отриманих у відповіді.
config — конфігурація, яка використовувалася при виконанні запиту.

request — сам запит, який був надісланий.

 */

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey;

const axiosUsersBtn = document.querySelector(".axios-btn");
const axiosList = document.querySelector(".axios-list");

axiosUsersBtn.addEventListener("click", () => {
  axiosUsers()
    .then((users) => axiosRenderUsers(users))
    .catch((error) => console.log(error));
});

function axiosUsers() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
}

function axiosRenderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`;
    })
    .join("");
  axiosList.insertAdjacentHTML("beforeend", markup);
}

//////      async and await
const foo = async () => {
  console.log("Before await");

  const promiseValue = await new Promise((resolve) => {
    setTimeout(() => resolve(5), 2000);
  });

  console.log("After await", promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5

//////
const fetchPosts1 = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  console.log("Posts: ", response.data);
};
fetchPosts1();
////  Наявный пример этого кода
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const fetchPostsBtn = document.querySelector(".async-btn");
const postList = document.querySelector(".posts");

// Контролирует номер группы
let page = 1;
// Контролирует количество элементов в группе
let perPage = 10;
// В нашем случае общее количество страниц подсчитывается на фронтенде
const totalPages = Math.ceil(100 / perPage);

fetchPostsBtn.addEventListener("click", async () => {
  // Проверьте конец коллекции, чтобы вывести предупреждение
  if (page > totalPages) {
    return iziToast.error({
      position: "topRight",
      message: "We're sorry, there are no more posts to load",
    });
  }

  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Увеличьте номер группы
    page += 1;

    // Замените текст кнопки после первого запроса
    if (page > 1) {
      fetchPostsBtn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });
  // Здесь можно изменить количество элементов в группе
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList.insertAdjacentHTML("beforeend", markup);
}
