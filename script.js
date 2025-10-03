const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeBtn");

createSquares();

sizeButton.addEventListener("click", () => {
  let size = null;

  while(!size || size < 30 || size > 99) {
    size = Number(window.prompt("Please select size between 30-99"));
  }
  createSquares(size);
});

function createSquares(size = 16) {
  container.innerHTML = "";

  const containerSize = 500;
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  const squareSize = containerSize / size;

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }
  }

  createSquareEvents();
}

function createSquareEvents(color = "red") {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = color;
    });
  });
}
