function getPrice(subscription) {
  let price = 0;
  if (subscription === "pro") {
    price = 100;
  }
  return price;
}
console.log(getPrice("free")); // 0
console.log(getPrice("pro")); // 100

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}
console.log(checkAge(20)); // "You are an adult"
console.log(checkAge(16)); // "You are an adult"

function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory

function getBiggerNumber(a, b) {
  return a > b ? a : b;
}

console.log(getBiggerNumber(5, 10)); // 10
console.log(getBiggerNumber(20, 15)); // 20
console.log(getBiggerNumber(7, 7)); // 7

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam")); // Access granted

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("The fruit is unknown");
}

function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return "Mobile screen";
  } else if (screenWidth > sm && screenWidth <= md) {
    return "Tablet screen";
  } else if (screenWidth > md && screenWidth <= lg) {
    return "Desktop screen";
  } else {
    return "Godzilla screen";
  }
}

console.log(getScreenType(700)); // "Tablet screen"
console.log(getScreenType(1200)); // "Desktop screen"
console.log(getScreenType(1500)); // "Godzilla screen"
console.log(getScreenType(320)); // "Mobile screen"

function isNumberInRange(start, end, number) {
  return start <= number && number <= end ? true : false;
}
console.log(isNumberInRange(10, 20, 15)); // true
console.log(isNumberInRange(10, 20, 5)); // false

function canUserChat(isOnline, isBlocked) {
  const canChat = isOnline && !isBlocked;

  if (canChat) {
    return "Can type in chat!";
  } else {
    return "Blocked from typing in chat!";
  }
}

console.log(canUserChat(true, false)); // "Can type in chat!"
console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
console.log(canUserChat(false, true)); // "Blocked from typing in chat!"

const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'

function normalizeInput(input, to) {
  return to === "lower" ? input.toLowerCase() : input.toUpperCase();
}
console.log(normalizeInput("Big SALE", "lower")); // "big sale"
console.log(normalizeInput("Big SALE", "upper")); // "BIG SALE"
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"

const message1 = "Please buy our stuff!";
const hasSpam = message1.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}

function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}
console.log(checkForName("Jacob Mercer", "jacob")); // true
console.log(checkForName("Jacob Mercer", "JACOB")); // true
console.log(checkForName("Jason Neis", "Jacob")); // false
console.log(checkForName("Caty Stars", "Andromeda")); // false

function checkFileExtension(fileName, ext) {
  return fileName.toLowerCase().endsWith(ext.toLowerCase())
    ? "File extension matches"
    : "File extension does not match";
}
console.log(checkFileExtension("document.pdf", ".pdf")); // "File extension matches"
console.log(checkFileExtension("image.jpeg", ".png")); // "File extension does not match

const message2 = "Welcome to Bahamas!";
const index = message2.indexOf("to");
console.log(index); // 8

const message3 = "Welcome to Bahamas!";
const index1 = message3.indexOf("hello");
console.log(index1); // -1

function getFileName(file) {
  const lastDotIndex = file.lastIndexOf(".");
  return lastDotIndex === -1 ? file : file.slice(0, lastDotIndex);
}
console.log(getFileName("document.pdf")); // "document"
console.log(getFileName("image.jpeg")); // "image"
console.log(getFileName("app")); // "app"

function createFileName(name, ext) {
  return name.trim() + ext.trim();
}
console.log(createFileName(" document", ".pdf")); // "document.pdf"
console.log(createFileName("image ", ".jpeg")); // "image.jpeg"

function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну

  while (counter < maxClients) {
    console.log(counter);
    counter += 1;
  }
}

countClients(18, 25);

function calculateTotal(number) {
  while (number >= 0) {
    return (number * (number + 1)) / 2;
  }
}

console.log(calculateTotal(24));
console.log(calculateTotal(0));
console.log(calculateTotal(3));

function sumUpTo(number) {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(0)); // 0
function calculateEvenTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}
console.log(calculateEvenTotal(10)); // 30
console.log(calculateEvenTotal(20)); // 110
console.log(calculateEvenTotal(0)); // 0

function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return null;
}
console.log(findNumber(10, 20, 3)); // 12
console.log(findNumber(10, 20, 5)); // 10
