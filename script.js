
let input_val = null;
let container = document.getElementById('container');
make_boxes(14, 14);
let submit_button = document.getElementById('change_size');
let rainbow_button = document.getElementById('rainbow');
let black_button = document.getElementById('black');
let reset_button = document.getElementById('reset');

submit_button.addEventListener('click', change_grid);
rainbow_button.addEventListener('click', rainbow);
black_button.addEventListener('click', black);
reset_button.addEventListener('click', reset);



// this function sets the rows by columns 
function make_boxes(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        cell.className = "cell"
        container.appendChild(cell);
    };
    black();
};

// this function sets the grid size with a prompt
function change_grid(){
    console.log("change grid happened")
    let row = window.prompt('enter size of grid (between 1-100) pls');
    if (isNaN(row)){
        row = window.prompt('please enter an integer, not some junk')
    }
    let column = row;
    make_boxes(row, column);
    reset();
}

// resets the entire container by setting everything back to white
function reset(){
    let boxes = document.getElementById('container').childNodes;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].style.cssText = 'background-color: rgb(255, 255, 255);';
    }
    black();
}

// an option to select a rainbow option
function rainbow() {
    console.log('acid is enabled')
    let boxes = document.getElementById('container').childNodes;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].onmouseover = function(e) {
            let color = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.style['background-color'] = color;
        }
    }
}

// sets the default drawing color
function black(){
    console.log('black is enabled')
    let boxes = document.getElementById('container').childNodes;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].onmouseover = function(e) {
            this.style['background-color'] = 'black';
        }
    }
}


