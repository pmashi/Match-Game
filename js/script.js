const img = {}
var grid;

function createGrid() { 
    grid = new Array(16);
    for(let i = 0; i < grid.length; i++) { 
        grid[i] = i%8;
    }
    gridLog();

    for(let i = 0; i < grid.length; i++) { 
        const j = Math.floor(Math.random() * (grid.length - i) + i);
        [grid[i], grid[j]] = [grid[j], grid[i]];
    }
    console.log("round 2")
    gridLog();
}

function gridLog() { // debugging function
    for(let i = 0; i < grid.length; i++) { 
        console.log(grid[i]);
    }
}

function initialize() { 
    // grid = new Array(16);
    let board = document.getElementById('board');
    for(i=0; i<4; i++) { 
        let row = document.createElement('div');
        row.className = 'row';
        for(k=0; k<4; k++) {
            let cell = document.createElement('img');
            cell.className = 'cell';
            cell.id = i * k + k;
            cell.setAttribute("src", "img/sandbucket.png");
            cell.addEventListener('click', () => {handleClick(cell)});
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    createGrid();
    render(); 
}

function render() { 
    scoreElement.innerHTML = score; 
    for(let cell of document.getElementsByClassName('cell')) { 
         
    }
}

var scoreElement = document.getElementById("score");
var score = 0; 

function handleClick(cell) { 
    score++;
}
