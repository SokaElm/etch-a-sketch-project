const container = document.querySelector(".container");
const start = document.querySelector("#start");

let newgridSize;
start.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let gridSize = prompt("How many squares per side do you want?");
  newGridSize = checkGridSize(gridSize);
  let childDivs = createSquares(newGridSize);
  addBackground(childDivs);
});

function checkGridSize(gridSize) {
  let newGridSize = parseInt(gridSize);
  if (isNaN(newGridSize) || newGridSize <= 0 || newGridSize > 100) {
    newGridSize = prompt(
      "Number is incorrect. It should be smaller than 100 and bigger than 0.Choose again"
    );
    newGridSize = checkGridSize(newGridSize);
  }
  return newGridSize;
}

function createSquares(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.toggle("contDivs");
    div.style.height = container.offsetHeight / gridSize + "px";
    for (j = 0; j < gridSize; j++) {
      const childs = document.createElement("div");
      div.appendChild(childs);
      childs.classList.toggle("childDivs");
      childs.style.width = container.offsetWidth / gridSize + "px";
    }
  }
  return "childDivs";
}

function addBackground(childDivs) {
  const node = document.querySelectorAll(".childDivs");
  node.forEach((div) => {
    div.addEventListener("mouseenter", (e) => {
      e.target.style.background = "pink";
    });
  });
}
