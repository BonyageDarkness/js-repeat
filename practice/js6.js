const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
console.log(pizzaPalace.order("Four meats"));
console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Big Mike"));
console.log(pizzaPalace.order("Viennese"));

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]
for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}
console.log(dog); // { name: "Mango", [[Prototype]]: animal }

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(parent.hasOwnProperty("surname")); //true
console.log(parent.hasOwnProperty("heritage")); //true
console.log(child.hasOwnProperty("name")); //true
console.log(child.hasOwnProperty("age")); //true
console.log(child.hasOwnProperty("surname")); //false
console.log(child.hasOwnProperty("heritage")); //false
console.log(parent.isPrototypeOf(child)); //true
console.log(child);

const objC = { c: "objC prop" };
const objB = Object.create(objC);
objB.b = "objB prop";
const objA = Object.create(objB);
objA.a = "objA prop";
console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  name;
  #email;
  #role;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
    User.#takenEmails.push(params.email);
    this.#role = params.role || User.roles.basic;
  }

  // Публічний метод для отримання електронної пошти
  get email() {
    return this.#email;
  }
  // Публічний метод для зміни електронної пошти
  set email(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
    if (newEmail === "") {
      console.log("Помилка! Пошта не може бути порожнім рядком!");
      return;
    }

    this.#email = newEmail;
  }
  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes("@");
  }
  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

class ContentEditor extends User {
  constructor(params) {
    super(params.email);
    this.posts = params.posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango); // { name: "Mango", email: "mango@mail.com" }
console.log(mango.email); // "mango@mail.com"
mango.email = "new@mail.com";
console.log(mango.email); // "new@mail.com"
console.log(User.isEmailTaken("poly@mail.com")); // false
console.log(User.isEmailTaken("mango@mail.com")); // true
const editor = new ContentEditor({
  email: "mango@mail.com",
  posts: [],
});
console.log(editor); // { #email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"
editor.addPost("post-1");
editor.addPost("post-2");
console.log(editor.posts); // ['post-1', 'post-2']
console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
