const numbers = [1, 2, 3, 4, 5];
const mixed = ["apple", 10, true];
const planets = ["Earth", "Mars", "Venus"];
const firstElement = planets[0];
console.log(firstElement);
planets[0] = "Jupiter";
planets[2] = "Neptune";
console.log(planets);

const planets1 = ["Earth", "Mars", "Venus"];
if (planets1.length >= 3) {
  console.log("3 or more elements");
} else {
  console.log("3 or less elements");
}

const planets2 = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets2.length - 1;
console.log(planets2[lastElementIndex]); // "Venus"

function getLastElementMeta(array) {
  const lastElementIndex = array.length - 1;
  return [array[lastElementIndex], lastElementIndex];
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

function transformString(string) {
  const words = string.split("_");
  return words.join("-");
}
console.log(transformString("user_age")); // "user-age"
console.log(transformString("price_per_droid")); // "price-per-droid"

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

const planets3 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const result = planets3.slice(1, 3);
console.log(result); // ["Mars", "Venus"]
console.log(planets3.slice(-2)); // ["Jupiter", "Saturn"]

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Neptune"];
console.log(firstArray.concat(secondArray, thirdArray));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];
console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
console.log(allClients);

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

function getSlice(array, value) {
  const slices = array.indexOf(value);
  if (slices === -1) {
    return [];
  } else {
    return array.slice(0, slices + 1);
  }
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));

const planets4 = ["Earth", "Mars", "Venus"];
planets4.push("Jupiter");
console.log(planets4); // ['Earth', 'Mars', 'Venus', 'Jupiter']
planets4.push("Saturn", "Neptune");
console.log(planets4); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

const tags = [];
for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"]
function createArrayOfNumbers(min, max) {
  const mod = [];
  for (let i = min; i <= max; i++) {
    mod.push(i);
  }
  return mod;
}
console.log(createArrayOfNumbers(14, 17));

const planets5 = ["Earth", "Mars", "Venus"];
for (let i = 0; i < planets5.length; i += 1) {
  console.log(planets5[i]);
}

function calculateTotalPrice(order) {
  let price = 0;
  for (let i = 0; i < order.length; i++) {
    price += order[i];
    console.log(price);
  }
  return price;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

function getEvenNumbers(start, end) {
  let numb = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      numb.push(i);
    }
  }
  return numb;
}
console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
console.log(getEvenNumbers(8, 8)); //[8]

function checkStorage(storage, item) {
  let x = item.toLowerCase();
  if (storage.includes(x)) {
    return `${x} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

function getCommonElements(array1, array2) {
  let x = [];
  for (let i = 0; i <= array1.length; i++) {
    if (array2.includes(array1[i])) {
      x.push(array1[i]);
    }
  }
  return x;
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

const planets9 = ["Earth", "Mars", "Venus"];
for (const planet of planets9) {
  console.log(planet);
}
function calculateTotalPrice1(order) {
  let x = 0;
  for (const price of order) {
    x += price;
  }
  return x;
}

function sum(a, b) {
  console.log(arguments);
  return a + b;
}
sum(2, 5);

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join("-");
}
foo(1, 2, 3); // Поверне "1-2-3"
