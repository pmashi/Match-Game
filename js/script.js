const img = ["2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png" ];
var grid;
var gridVis; 
var checkOne = false; 
var checkTwo = false; 

function createGrid() { 
    grid = new Array(16);
    gridVis = new Array(16)
    for(let i = 0; i < grid.length; i++) { 
        grid[i] = i%8;
        gridVis = false; 
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
    createGrid();
    let board = document.getElementById('board');
    for(i=0; i<4; i++) { 
        let row = document.createElement('div');
        row.className = 'row';
        for(k=0; k<4; k++) {
            let cell = document.createElement('img');
            cell.className = 'cell';
            cell.id = i*parseInt(Math.sqrt(grid.length)) + k;
            cell.setAttribute("src", "img/sandbucket.png");
            cell.addEventListener('click', () => {handleClick(cell)});
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    render(); 
}

function render() { 
    scoreElement.innerHTML = score; 
    for(let cell of document.getElementsByClassName('cell')) { 
        id = cell.id;
        console.log("id: " + id);
        if(gridVis[id] == false) { 
            cell.setAttribute("src", "img/sandbucket.png");
        }
    }
}

var scoreElement = document.getElementById("score");
var score = 0; 

function handleClick(cell) { 
    score++;
    id = cell.id;
    if(gridVis[id] == true) return; 
    cell.setAttribute("src", "img/"+img[grid[id]]);

}
