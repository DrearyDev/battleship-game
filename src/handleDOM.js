
const body = document.querySelector('body');
const header = document.querySelector('.header');

function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement('div');
            div.classList.add('square');

            div.row = i;
            div.column = j;
            div.coord = [i,j];

            grid.appendChild(div);
        };
    };
    
    body.appendChild(grid);
};

function singlePlayer() {
    body.innerHTML = '';
    body.appendChild(header);
    createGrid();
};

function doublePlayer() { // will work on this later
    body.style.backgroundColor = 'lightblue';
    // body.innerHTML = '';
    // body.appendChild(header);
};

export { singlePlayer, doublePlayer };
