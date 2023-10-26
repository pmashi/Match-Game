function createGrid() { 
    
}

function initialize() { 
    let board = document.getElementById('board');

    for(i=0; i<4; i++) { 
        let row = document.createElement('div');
        row.className = 'row';
        for(k=0; k<4; k++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = i + ", " + k;
            // cell.setAttribute('src', "img/sandbucket.png");
            cell.innerHTML = i + ", " + k;
            cell.addEventListener('click', () => {handleClick(cell)});
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    render(); 
}

function render() { 
    for(let cell of document.getElementsByClassName('cell')) { 
         
    }
}

function handleClick(cell) { 
    
}

function randomize() { 

}