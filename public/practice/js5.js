function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});
// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

const numbers = [5, 10, 15, 20, 25];
// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}
// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (index) {
    totalPrice += index;
  });
  return totalPrice;
}
console.log(calculateTotalPrice([164, 48, 291])); //503

function filterArray(numbers, value) {
  let x = [];
  numbers.forEach(function (number) {
    if (number > value) {
      x.push(number);
    }
  });
  return x;
}
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41,76]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]

const add = (...args) => {
  console.log(args);
};

console.log(add(1, 2, 3)); // [1, 2, 3]

const numbers1 = [5, 10, 15, 20, 25];
const logMessage = (number1, index) => {
  console.log(`Index ${index}, value ${number1}`);
};
numbers.forEach(logMessage);

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });
  return newArray;
};
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers2, 2);
// Мутація вихідних даних не відбулася
console.log(numbers2); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

function changeEven(numbers, value) {
  let array = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number += value;
    }
    array.push(number);
  });
  return array;
}
console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);
// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
    genres: ["fiction"],
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
    genres: ["horror", "mysticism"],
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map((book) => book.title);
console.log(titles); // ['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']
const genres = books.flatMap((genre) => genre.genres);

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map((student) => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
const flattenedCourses = students.flatMap((student) => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0
const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0
const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

const numbers3 = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers3.filter((even) => even % 2 === 0);
const oddNumbers = numbers3.filter((odd) => odd % 2 != 0);
console.log(evenNumbers); // [24, 82, 36, 18, 52]
console.log(oddNumbers); //[17, 61, 47, 73]

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students1 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students1.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi
const worst = students1.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax
const average = students1.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston

const getUsersWithAge = (users, minAge, maxAge) => {
  const user = users.filter((user) => user.age >= minAge && user.age <= maxAge);
  return user;
}; // Возврат от минимально до максимального age из объекта users

/*
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
*/
const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];
const hasEveryProduct = products.every((product) => product.quantity > 0);
console.log(hasEveryProduct); // false
// Хотя бы один елемент равен функции
const hasSomeProduct = products.some((product) => product.quantity >= 0);
console.log(hasSomeProduct); // true

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
console.log(total); // 12

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((start, end) => {
  return start + end;
}, 0);
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(totalPlayTime); //2692
console.log(averagePlayTime); //673

const players1 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players1.reduce((total, games) => {
  return total + games.playtime / games.gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame); //1023

const studentsSort = [
  "Jacob",
  "Artemis",
  "Solomon",
  "Adrian",
  "Kai",
  "Ganymede",
];
console.log(studentsSort.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
const inReversedOrder = studentsSort.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

const students5 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students5.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
const inDescendingScoreOrder = students5.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
const inAlphabeticalOrder = students5.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAscendingScoreOrder);
console.log(inDescendingScoreOrder);
console.log(inAlphabeticalOrder);

const students6 = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
const names = students6
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);
console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

const uniqueSortedCourses = students6
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));
console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

const books7 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names7 = books7
  .filter((number) => number.rating >= MIN_BOOK_RATING)
  .flatMap((student) => student.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log(names7);
