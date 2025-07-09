function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");

const button = document.querySelector(".change-color");

const span = document.querySelector(".color");

//при клике → получить цвет → вставить в body → вставить в span
button.addEventListener("click", () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  span.textContent = random;
});
