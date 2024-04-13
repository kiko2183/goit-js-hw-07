const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  const inputName = input.value.trim();
  output.textContent = inputName || "Anonymous";
});
