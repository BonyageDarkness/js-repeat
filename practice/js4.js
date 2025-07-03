const book = {
  title: "The Last Kingdom",
  author: "Bernand Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};
book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"
const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]
const bookPrice = book.price;
console.log(bookPrice); // undefined

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості з таким ключем
}
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

for (const key of keys) {
  console.log(book[key]); // Значення властивості
}
/*for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
*/

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};
const location1 = user.location;
console.log(location1); // {country: "Jamaica", city: "Ocho Rios"}
const country = user.location.country;
console.log(country); // "Jamaica"
const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

const propName = "name";
const user1 = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName]: "Henry Sibola",
};

console.log(user1.name); // "Henry Sibola"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 6.8,
  },
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}

const titles = [];
for (const book of books) {
  titles.push(book.title);
}
console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
const averageRating = totalRating / books.length;
console.log(averageRating); // 8

////////////////
////////////////
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const prices of products) {
    if (prices.name === productName) {
      return prices.price;
    }
  }
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let value = [];
  for (const prop of products) {
    if (prop[propName]) {
      value.push(prop[propName]);
    }
  }
  return value;
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));

const obj = {
  method(value) {
    console.log(`I'm a method with ${value}!`);
  },
};
obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"

// ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return this.books;
  },
  // Це метод об'єкта
  addBook(bookName) {
    this.books.push(bookName);
  },
};

// Виклики методів
console.log(bookShelf.getBooks()); // поверне ["The Last Kingdom", "The Mist"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.addPotion("Power potion"));

const bookShelf1 = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

bookShelf1.addBook({ title: "Dream Guardian", rating: 9 });
console.log(bookShelf1.getBooks());
console.log(bookShelf1.getAvarageRating());

const bookShelf2 = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
};

bookShelf2.changeRating("The Mist", 9);
bookShelf2.changeRating("The Last Kingdom", 4);
console.log(bookShelf2.books);

function multiply(...args) {
  console.log(args);
}
console.log(multiply(1, 2)); // [1, 2]
console.log(multiply(1, 2, 3)); // [1, 2, 3]
console.log(multiply(1, 2, 3, 4)); // [1, 2, 3, 4]

function add(...args) {
  let sum = 0;
  for (const adds of args) {
    sum += adds;
  }
  return sum;
}
console.log(add(12, 4, 11, 48)); //75

function addOverNum(value, ...args) {
  let sum = 0;
  for (const values of args) {
    if (values > value) {
      sum += values;
    }
  }
  return sum;
}
console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //51
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //218

const temps = [14, -4, 25, 8, 11];
console.log(...temps); // 14 -4 25 8 11  набір окремих чисел
// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

function getExtremeScores(scores) {
  const score = {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
  return score;
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(allScores); // all
console.log(bestScore); // 97
console.log(worstScore); // 14

const objA = {
  x: 1,
  y: 2,
};

const objB = {
  y: 3,
};

const result = {
  x: 5,
  ...objA,
  y: 10,
  ...objB,
  z: 15,
};
console.log(result);
