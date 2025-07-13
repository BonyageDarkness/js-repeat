const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    return (nameOutput.textContent = "Anonymous");
  } else {
    return (nameOutput.textContent = event.currentTarget.value);
  }
});
