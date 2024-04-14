function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.getElementById("controls");
const input = control.querySelector("input");
const btnDestroy = control.querySelector("[data-destroy]");
const btnCreate = control.querySelector("[data-create]");
const boxesContainer = document.getElementById("boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }

    boxesContainer.innerHTML = "";
    boxesContainer.appendChild(fragment);

    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
