
const takePalete = document.querySelector("#pixel-board");
const takeColorPalete = document.querySelector("#color-palette");
let takeColor1 = document.querySelector("#corQuadPalet1");
let takeColor2 = document.querySelector("#corQuadPalet2");
let takeColor3 = document.querySelector("#corQuadPalet3");
let takeColor4 = document.querySelector("#corQuadPalet4");
let print ="corQuadPalet1";
let printClean = "white";
let btnCleanPixel = document.createElement("button");
const cleanP = document.getElementById("clean-pixel");

function pixels(){
  for(let index = 1; index <= 25; index +=1){
  const quadPalete = document.createElement("div");
  quadPalete.className = "pixel";
  takePalete.appendChild(quadPalete);
  }
};
pixels();

function removeSelected() {
  takeColor1.classList.remove("selected");
  takeColor2.classList.remove("selected");
  takeColor3.classList.remove("selected");
  takeColor4.classList.remove("selected");
}

function takeSelected(event) {
  let corSelected = document.querySelector(".selected");
  if(event.target.className !== corSelected) {
    removeSelected();
    event.target.classList.add("selected");
    print = event.target.id;
  }
}
takeColorPalete.addEventListener("click", takeSelected);



function printPixel(event) {
  if(event.target.id !== "pixel-board") {
    event.target.id = print;
    // console.log(pintaCor.style.backgroundColor = "blue");
  // }
  // Outra forma de fazer!!!
  // if(event.target.className === "pixel") {
  //   event.target.style.backgroundColor = "black";
  // }
}
}
takePalete.addEventListener("click", printPixel);


function btnClean() {
  btnCleanPixel.innerText = "Limpar";
  btnCleanPixel.id = "clear-board";
  cleanP.appendChild(btnCleanPixel);
}
btnClean();

let painted = document.querySelectorAll(".pixel");
function cleanPixel(event) {
  if(btnCleanPixel.style.backgroundColor !== "white") {
    painted.style.backgroundColor = printClean;
  }
  // painted.style.backgroundColor = "white";
  // console.log(painted);
  // if(event.target.backgroundColor === "pixel") {
  // }
}
btnCleanPixel.addEventListener("click", cleanPixel);