// SELEÇÃO HTML
const imputBoardSize = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');
const buttonGenerateBoard = document.getElementById('generate-board');
const paletteColor = document.getElementById('palette-color');
let colorStore = 'background-color: rgb(0, 0, 0)';
const buttonSelectColor = document.getElementById('select-color');
const clearBoard = document.getElementById('clear-board');

// MUNDA QUANTIDADE DE PIXEL PARA PINTAR.
function sizeBoard() {
  let imputValue = imputBoardSize.value;
  if (imputValue < 5) {
    imputValue = 5;
  } else if (imputValue > 30) {
    imputValue = 30;
  }
  for (let c = 0; c < imputValue; c += 1) {
    const newLine = document.createElement('div');
    newLine.id = `board${c}`;
    newLine.className = 'newLine';
    pixelBoard.appendChild(newLine);
    for (let d = 0; d < imputValue; d += 1) {
      const newColun = document.createElement('div');
      newColun.className = 'pixel color-white size border horizontal';
      const aux = document.getElementById(`board${c}`);
      aux.appendChild(newColun);
    }
  }
}
// console.log(pixelBoard); //TESTAR TAMANHO.

buttonGenerateBoard.addEventListener('click', () => {
  if (imputBoardSize.value === '') {
    alert('Tamanho inválido!');
  } else {
    pixelBoard.innerHTML = '';
    sizeBoard();
  }
});

// SELECIONA COR
buttonSelectColor.addEventListener('click', () => {
  const aux = paletteColor.value;
  colorStore = aux;
  console.log(aux);
  console.log(colorStore);
});

// COLORE PIXEL
function colorize2(paint) {
  paint.setAttribute('style', `background-color: ${colorStore}`);
}

pixelBoard.addEventListener('click', (event) => {
  colorize2(event.target);
});

// LIMPAR TELA.
clearBoard.addEventListener('click', () => {
  window.location.reload();
});
