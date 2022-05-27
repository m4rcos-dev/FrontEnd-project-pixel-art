//SELEÇÃO DO HTML.
let selected = document.getElementsByClassName('selected')[0].classList[1];

const title = document.getElementById('title');

const colorPalette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');

const pixelBoard = document.getElementById('pixel-board');
const board1 = document.getElementsByClassName('board1');
const board2 = document.getElementsByClassName('board2');
const board3 = document.getElementsByClassName('board3');
const board4 = document.getElementsByClassName('board4');
const board5 = document.getElementsByClassName('board5');
let pixel = document.getElementsByClassName('pixel');



//SELECIONA COR NA PALETA.
function colorSelect(selection) {
    for(let i = 0; i < color.length; i += 1){
            color[i].classList.remove('selected');
        if(selection === color[i]){
            selection.classList.toggle('selected');
            selected = document.getElementsByClassName('selected')[0].classList[1];
        }
    }
}

colorPalette.addEventListener('click', function (event) {
    colorSelect(event.target);
    console.log(color);
    console.log(selected);
})

//COLORE PIXEL.
function colorize (paint){
    let aux = paint.classList[1];
    paint.classList.replace(aux, selected);
}

pixelBoard.addEventListener('click', function(event){
    colorize(event.target);
    console.log(event.target);
})





//RESERVA

//SELECIONA COR NA PALETA.
    // for(let i = 0; i < color.length; i += 1){
    //         color[i].classList.remove('selected');
    //     if(selection === color[i]){
    //         selection.classList.toggle('selected');
    //         selected = document.getElementsByClassName('selected')[0].classList[1];
    //     }
    // }

    // for (let i = 0; i < color.length; i += 1) {
    //     color[i].classList.remove('selected');
    // }
    // selection.classList.add('selected');
    // selected = document.getElementsByClassName('selected')[0].classList[1];