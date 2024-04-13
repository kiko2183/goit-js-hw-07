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
    const boxes = Array.from({ length: amount }, (_, index) => {
      const box = document.createElement("div");
      box.style.width = `${30 + index * 10}px`;
      box.style.height = `${30 + index * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    });

    boxesContainer.innerHTML = "";

    boxes.forEach((box) => {
      boxesContainer.appendChild(box);
    });

    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
