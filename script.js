//SELEÇÃO DO HTML.
let selected = document.getElementsByClassName('selected')[0].classList[1];

const body = document.querySelectorAll('body');
const title = document.getElementById('title');

const colorPalette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');

const clearBoard = document.getElementById('clear-board');
const imputBoardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');


let pixelBoard = document.getElementById('pixel-board');
let line = document.getElementsByClassName('line');
const board1 = document.getElementsByClassName('board1');
const board2 = document.getElementsByClassName('board2');
const board3 = document.getElementsByClassName('board3');
const board4 = document.getElementsByClassName('board4');
const board5 = document.getElementsByClassName('board5');
let pixel = document.getElementsByClassName('pixel');



//SELECIONA COR NA PALETA.
function colorSelect(selection) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
    if (selection === color[i]) {
      selection.classList.toggle('selected');
      selected = document.getElementsByClassName('selected')[0].classList[1];
    }
  }
}

colorPalette.addEventListener('click', function (event) {
  colorSelect(event.target);
  // console.log(color); //TESTAR SELEÇÃO
  // console.log(selected); //TESTAR SELEÇÃO
})

//COLORE PIXEL.
function colorize(paint) {
  let aux = paint.classList[1];
  paint.classList.replace(aux, selected);
}

pixelBoard.addEventListener('click', function (event) {
  colorize(event.target);
  // console.log(event.target); //TESTAR SELEÇÃO
})

//LIMPA PIXELS.
clearBoard.addEventListener('click', function () {
  location.reload();
});

//MUNDA QUANTIDADE DE PIXEL PARA PINTAR.
function sizeBoard() {

  for (let c = 0; c < imputBoardSize.value; c += 1) {
    let newLine = document.createElement('div');
    newLine.id = 'board' + c;
    newLine.className = 'newLine';
    pixelBoard.appendChild(newLine);
    for (let d = 0; d < imputBoardSize.value; d += 1) {
      let newColun = document.createElement('div');
      newColun.className = 'pixel color-white size border horizontal';
      let aux = document.getElementById('board' + c);
      aux.appendChild(newColun);
    }
  }
}
// console.log(pixelBoard); //TESTAR TAMANHO.


buttonGenerateBoard.addEventListener('click', function () {
  if (imputBoardSize.value === '') {
    alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
    sizeBoard();
  }
})

