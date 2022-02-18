/* eslint-disable no-param-reassign */
const takePalete = document.querySelector('#pixel-board');
const takeColorPalete = document.querySelector('#color-palette');
const takeColor1 = document.querySelector('#corQuadPalet1');
const takeColor2 = document.querySelector('#corQuadPalet2');
const takeColor3 = document.querySelector('#corQuadPalet3');
const takeColor4 = document.querySelector('#corQuadPalet4');
let print = 'black';
const btnCleanPixel = document.createElement('button');
const cleanP = document.getElementById('clean-pixel');

function pixels() {
  for (let index = 1; index <= 25; index += 1) {
    const quadPalete = document.createElement('div');
    quadPalete.className = 'pixel';
    takePalete.appendChild(quadPalete);
  }
}
pixels();

function removeSelected() {
  takeColor1.classList.remove('selected');
  takeColor2.classList.remove('selected');
  takeColor3.classList.remove('selected');
  takeColor4.classList.remove('selected');
}

function takeSelected(event) {
  const corSelected = document.querySelector('.selected');
  if (event.target.className !== corSelected) {
    removeSelected();
    event.target.classList.add('selected');
    print = getComputedStyle(event.target).backgroundColor;
  }
}
takeColorPalete.addEventListener('click', takeSelected);

function printPixel(event) {
  if (event.target.id !== 'pixel-board') {
    event.target.style.backgroundColor = print;
    // console.log(pintaCor.style.backgroundColor = "blue");
  // }
  // Outra forma de fazer!!!
  // if(event.target.className === "pixel") {
  //   event.target.style.backgroundColor = "black";
  // }
  }
}
takePalete.addEventListener('click', printPixel);

function btnClean() {
  btnCleanPixel.innerText = 'Limpar';
  btnCleanPixel.id = 'clear-board';
  cleanP.appendChild(btnCleanPixel);
}
btnClean();

function cleanPixel() {
  const quadPalete = document.getElementsByClassName('pixel');
  for (let index = 0; index < quadPalete.length; index += 1) {
    quadPalete[index].style.backgroundColor = 'white';
  }
}
btnCleanPixel.addEventListener('click', cleanPixel);
