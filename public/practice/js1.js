const age = 20;
console.log(age);

const userName = "John Doe";
console.log(userName);

let value = null;
console.log(value);

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting);

const productName = "Repair Droid";
console.log(productName.length);
console.log("Repair droid".length);

const product = "Repaid Droid";
console.log(product[0]);
console.log(product[5]);
console.log(product[11]);
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]);

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];
console.log(courseTopic);
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

let productD = "Droid";
productD = "DrOid";
console.log(productD);

console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("cm5")); // NaN
console.log(Number.parseInt("")); // NaN

console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN

console.log(Math.floor(1.3));
console.log(Math.floor(1.7));
console.log(Math.ceil(1.3));
console.log(Math.ceil(1.7));
console.log(Math.round(1.3));
console.log(Math.round(1.7));
console.log(Math.max(20, 10, 50, 40));
console.log(Math.min(20, 10, 50, 40));
console.log(Math.random());

console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); // "5.00"

function doStuff() {
  console.log("Doing stuff...");
}
doStuff();

function add(a, b, c) {
  const result = a + b + c;
  console.log(`Addition result equals ${result}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function multiply(x, y, z) {
  console.log("The code before return is executed as usual");
  return x * y * z;
}

console.log(multiply(2, 3, 5)); // 30
