let getMainContainer = document.getElementById('main-container');
let cell = document.getElementsByClassName('cell');
let button = document.getElementsByClassName('button');

// Creating the Grid
function createGrid () {
    let userInput = prompt('Enter Grid Size');
    if(userInput >= 2 && userInput <= 100) {
      getMainContainer.style.gridTemplateColumns = "repeat(" + userInput + ", 1fr)";
      getMainContainer.style.gridTemplateRows = "repeat(" + userInput + ", 1fr)";

    } else {
      createGrid();
    };

    let powerOf2 = userInput ** 2;
    for(let i = 0; i <= powerOf2; i++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('cell');
      getMainContainer.appendChild(newDiv);
    }
};
createGrid();

// Black
function black(){
  for(let i = 0; i < cell.length; i++) {
    cell[i].onmouseover = function(e) {
    cell[i].style.backgroundColor = 'black';
    }
  }
};

// Rainbow
function rainbow(){
  for(let i = 0; i < cell.length; i++) {
    cell[i].onmouseover = function(e) {
      cell[i].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  }
};

// Increment Darker
function darker(){
  for(let i = 0; i < cell.length; i++) {
    cell[i].onmouseover = function(e) {
      cell[i].style.backgroundColor = 'black';
      cell[i].style.opacity =(parseFloat(cell[i].style.opacity) || 0) + 0.1;
    }
  }
};


// Clear Canvas
function clearCanvas () {
  for(let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = "#f4f4f4";
    cell[i].style.transition = '.3s';
  }
};




// Event Listeners
button[0].addEventListener('click', black);
button[1].addEventListener('click', rainbow);
button[2].addEventListener('click', darker);
button[3].addEventListener('click', clearCanvas);
