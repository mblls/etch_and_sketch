// grabbing our container element and adding however many rows and columns
// to it
let container = document.getElementById('container');

// this function sets the rows by columns 
function make_boxes(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        cell.innerText = i+1;
        container.appendChild(cell).className = "cell";
    };
};

make_boxes(16, 16);