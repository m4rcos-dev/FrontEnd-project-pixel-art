//SELEÇÃO DO HTML.
let selected = document.getElementsByClassName('selected')[0].classList[1];
let colorStore = 'background-color: rgb(0, 0, 0)';

const title = document.getElementById('title');

const colorPalette = document.getElementById('color-palette');
let colorRed = document.getElementsByClassName('color-red');
let colorBlue = document.getElementsByClassName('color-blue');
let colorGreen = document.getElementsByClassName('color-green'); 
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

//INICIA COM BACKGROUND-COLOR: BLACK;
function colorize(paint) {
    let aux = paint.classList[1];
    paint.classList.replace(aux, selected);
  }
  
  pixelBoard.addEventListener('click', function (event) {
    colorize(event.target);
    // console.log(event.target); //TESTAR SELEÇÃO
  })

//GERA CORES ALETORIAS NA PALETA DE CORES.
function generateColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let e = 0; e < 6; e += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}

for (let f = 1; f < color.length; f += 1){
  let capatAux = 'background-color: ' + generateColor();
  color[f].setAttribute('style', capatAux);
}


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
  let teste = window.getComputedStyle(event.target);
  let teste2 = teste.getPropertyValue('background-color');
  colorStore = teste2;
  colorSelect(event.target);
  console.log(colorStore);
  // console.log(color); //TESTAR SELEÇÃO
  // console.log(selected); //TESTAR SELEÇÃO
})

//COLORE PIXEL.
function colorize2(paint) {
  // let aux = window.getComputedStyle(paint);
  // let aux2 = aux.getPropertyValue('background-color');
  // paint.setAttribute('style', 'background-color' + aux2)
  // let aux = paint.classList[1];
  paint.setAttribute('style', 'background-color: ' + colorStore);
}

pixelBoard.addEventListener('click', function (event) {
  colorize2(event.target);
  // console.log(event.target); //TESTAR SELEÇÃO
})

//LIMPA PIXELS.
clearBoard.addEventListener('click', function () {
  location.reload();
});

//MUNDA QUANTIDADE DE PIXEL PARA PINTAR.
function sizeBoard() {
  let imputValue = imputBoardSize.value;
  if (imputValue < 5) {
    imputValue = 5;
  } else if (imputValue > 50) {
    imputValue = 50;
  } 
    for (let c = 0; c < imputValue; c += 1) {
      let newLine = document.createElement('div');
      newLine.id = 'board' + c;
      newLine.className = 'newLine';
      pixelBoard.appendChild(newLine);
      for (let d = 0; d < imputValue; d += 1) {
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

