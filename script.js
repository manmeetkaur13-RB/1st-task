// Simple button click interaction
const buttons = document.querySelectorAll(".card-content button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
});
