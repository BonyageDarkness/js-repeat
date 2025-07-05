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
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([1, 2, 3, 4, 5], 5));
