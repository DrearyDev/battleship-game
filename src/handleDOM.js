
const body = document.querySelector('body');
const header = document.querySelector('.header');

function singlePlayer() {
    body.innerHTML = '';
    body.appendChild(header);
};

function doublePlayer() { // will work on this later
    body.style.backgroundColor = 'lightblue';
    // body.innerHTML = '';
    // body.appendChild(header);
};

export { singlePlayer, doublePlayer };