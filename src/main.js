import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <a href="/hw/hw1/hw1.html" class="button">HW1</a>
    <a href="/hw/hw2/hw2.html" class="button">HW2</a>
    <a href="/hw/hw3/hw3.html" class="button">HW3</a>
    <a href="/hw/hw4/hw4.html" class="button">HW4</a>
    <a href="/hw/hw5/hw5.html" class="button">HW5</a>
    <a href="/hw/hw6/hw6.html" class="button">HW6</a>
    <a href="/hw/hw7/src/src/index.html" class="button">HW7</a>
    <a href="/hw/hw8/index.html" class="button">HW8</a>
  </div>
`;
