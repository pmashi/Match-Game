function createGrid() { 
    
}

function initialize() { 
    let board = document.getElementById('board');

    for(i=0; i<grid.length; i++) { 
        let row = document.createElement('div');
        row.className = 'row';
        for(k=0; k<4; k++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = i + ", " + k;
            cell.setAttribute('src', "img/sandbucket.png");
            cell.addEventListener('click', () => {handleClick(cell)});
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    render(); 
}

function render() { 
    for(let cell of document.getElementsByClassName('cell')) { 
        cell.innerHTML = i + ", " + k; 
    }
}

function handleClick(cell) { 
    
}

function randomize() { 

}