let container = document.querySelector(".container");
let temp_element;

let paddingSize = 725/(16*2);

function createGrid (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 2fr)`;
    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            temp_element = document.createElement('div');
            temp_element.classList.add('div-tiles');
            container.appendChild(temp_element);
        }
    }
}
createGrid(16);

let divTiles = document.querySelectorAll('.div-tiles');
function handleMouseOver (e) {
    e.target.classList.add('black-tile');
    e.target.classList.remove('white-tile');
}
function handleMouseOut (e) {
    e.target.classList.add('white-tile');
    e.target.classList.remove('black-tile');
}
divTiles.forEach( (item) => {
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('mouseout', handleMouseOut);
    item.style.padding = `${paddingSize}px`;
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let input;
function changeGridSize (e) {
    input = prompt('Please enter the required grid numbers (max: 100)', 16);
    while(input > 100) {
        input = prompt('Please enter the required grid numbers (max: 100)', 16);
    }
    paddingSize = 725/(input*2);
    removeAllChildNodes(container);
    createGrid(input);
    divTiles = document.querySelectorAll('.div-tiles');
    divTiles.forEach( (item) => {
        item.addEventListener('mouseover', handleMouseOver);
        item.addEventListener('mouseout', handleMouseOut);
        item.style.padding = `${paddingSize}px`;
    })   
}

button = document.querySelector('#grid-num');
button.addEventListener('click', changeGridSize);