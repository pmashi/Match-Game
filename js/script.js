const img = ["2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png", "2x Shovel.png", "Normal Card.png" ];
var grid; 

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
    // render(); 
}

function render() { 
    scoreElement.innerHTML = "Score: " + score; 
}

var scoreElement = document.getElementById("score");
var score = 0; 
var checkOne = -1; 
var checkTwo = -1; 

function handleClick(cell) { 
    console.log("click!")
    id = cell.id;
    if(gridVis[id] == true) return; 
    if(checkOne == -1) {
        cell.setAttribute("src", "img/"+img[grid[id]]);
        checkOne = id;
        score++; 
    } else if(checkTwo == -1) { 
        cell.setAttribute("src", "img/"+img[grid[id]]);
        if(checkOne != id)  {
            checkTwo = id; 
            score++;
        }
    }
    render();
    if(checkOne != -1 && checkTwo != -1) { 
        console.log("about to check")
        console.log("checkOne: " + checkOne + " " + grid[checkOne]);
        console.log("checkTwo: " + checkTwo + " " + grid[checkTwo]); 
        check(); 
    }
}


function check() { 
    if(grid[checkOne] == grid[checkTwo]) {
        checkOne = -1, checkTwo =-1;     
        return;
    }
    else { 
        document.getElementById(checkOne).setAttribute("src", "img/sandbucket.png");        
        document.getElementById(checkTwo).setAttribute("src", "img/sandbucket.png");
    }
    checkOne = -1;
    checkTwo = -1; 
}