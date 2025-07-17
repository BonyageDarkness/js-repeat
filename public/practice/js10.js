const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу

// Registering promise callbacks
promise
  .then((value) => console.log(value)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

////
///
///

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Измените значение переменной isSuccess, чтобы имитировать состояние запроса
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
  "Mango",
  (user) => console.log(user),
  (error) => console.error(error)
);

//
const fetchUserFromServer1 = (username) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);
    setTimeout(() => {
      // Измените значение переменной isSuccess, чтобы имитировать статус запроса
      const isSuccess = true;
      if (isSuccess) {
        resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
      } else {
        reject("error"); // значенням параметра reject буде колбек-функція методу catch()
      }
    }, 2000);
  });
};

//Получаем промес во внешнем коде и добавляем
//  на него обработчики в методах then и catch.
fetchUserFromServer1("Mango") // результатом виклику fetchUserFromServer("Mango")
  // буде проміс
  // проміс обробляємо у методах then() i catch()
  .then((user) => console.log(user)) // проміс обробляємо в методі then()
  .catch((error) => console.error(error)); // проміс обробляємо в методі catch()

//
//
//
//
//
const makeGreeting = (guestName) => {
  if (!guestName) {
    return Promise.reject("Guest name must not be empty");
  } else {
    return Promise.resolve(`Welcome ${guestName}`);
  }
};

makeGreeting("Mango")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
//
//
//value - значение, которое будет значением промисса.
//delay - задержка в миллисекундах, после которой будет выполняться промес.
// shouldResolve - булево значение, указывающее, должен ли промес выполниться
//  (true), или быть отклоненным (false).
const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

makePromise({ value: "A", delay: 1000 })
  .then((value) => console.log(value)) // "A"
  .catch((error) => console.log(error));

makePromise({ value: "B", delay: 3000 })
  .then((value) => console.log(value)) // "B"
  .catch((error) => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // "C"
