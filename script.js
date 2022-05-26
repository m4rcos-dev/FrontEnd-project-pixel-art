//SELEÇÃO DO HTML.
const title = document.getElementById('title');

const colorPalette = document.getElementById('color-palette');
const color =  document.getElementsByClassName('color');

const pixelBoard = document.getElementById('pixel-board');
const board1 =  document.getElementsByClassName('board1');
const board2 =  document.getElementsByClassName('board2');
const board3 =  document.getElementsByClassName('board3');
const board4 =  document.getElementsByClassName('board4');
const board5 =  document.getElementsByClassName('board5');
const pixel = document.getElementsByClassName('pixel');

//SELECIONA COR NA PALETA.
function colorSelect (selection){
    for(let i = 0; i < color.length; i += 1){
            color[i].classList.remove('selected');
        if(selection === color[i]){
            selection.classList.toggle('selected');
        }
    }
}

colorPalette.addEventListener('click', function(event){
    colorSelect(event.target);
    console.log(color);
})