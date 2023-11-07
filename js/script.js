const img = ["Stick_Item_Card.png", "Pebbles_Item_Card.png", "Key_Item_Card.png", "Broken_Phone_Item_Card.png", "Old_Watch_Item_Card.png", "Old_Necklace_Item_Card.png", "Ring_Item_Card.png", "Gold_Item_Card.png"];
document.getElementById("reset").addEventListener("click", () => reset());
var score = 0; 
var checkOne = -1; 
var checkTwo = -1; 
var win = false; 
function createGrid() { 
    grid = new Array(16);
    gridVis = new Array(16);
    for(let i = 0; i < grid.length; i++) { 
        grid[i] = i%8;
        gridVis[i] = false; 
    }
    for(let i = 0; i < grid.length; i++) { 
        const j = Math.floor(Math.random() * (grid.length - i) + i);
        [grid[i], grid[j]] = [grid[j], grid[i]];
    }
    gridLog();
}
function gridLog() { // debugging function
    for(let i = 0; i < grid.length; i++) console.log(grid[i] + " " + gridVis[i]);
}
function reset() { 
    createGrid(); 
    for(let i = 0; i < grid.length; i++) { 
        document.getElementById(i).setAttribute("src", "img/Normal_Card.png");
    }
    score = 0; 
    win = false; 
    render(); 
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
            cell.setAttribute("src", "img/Normal_Card.png");
            cell.addEventListener('click', () => {handleClick(cell)});
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    score = 0; 
    render(); 
}
function render() { 
    document.getElementById("score").innerHTML = "Score: " + score; 
    displayAchievements();
    winDisplay = win ? "block" : "none"; 
    document.getElementById("win").style.display = winDisplay; 
}
function handleClick(cell) { 
    id = cell.id;
    if(gridVis[id] == true || (checkOne != -1 && checkTwo != -1)) return; 
    console.log("click!" + grid[id] + " " + gridVis[id])
    if(checkOne == -1) {
        cell.setAttribute("src", "img/"+img[grid[id]]);
        checkOne = id; 
        gridVis[id] = true;
        score++; 
    } else if(checkTwo == -1) { 
        cell.setAttribute("src", "img/"+img[grid[id]]);
        if(checkOne != id) { 
            checkTwo = id; 
            gridVis[id] = true;
            //Solid Gold Achievement
            if(activeAchievement[1]) score += 0.5;
            else score++;
        }
    }
    render();
    if(checkOne != -1 && checkTwo != -1) check(); 
}
function check() { 
    checkForAchievements();
    if(grid[checkOne] == grid[checkTwo]) {
        checkOne = -1, checkTwo =-1; 
        checkWin(); 
        return;
    } else { 
        setTimeout(() => { 
            document.getElementById(checkOne).setAttribute("src", "img/Normal_Card.png");
            document.getElementById(checkTwo).setAttribute("src", "img/Normal_Card.png");
            (gridVis[checkOne] = false, gridVis[checkTwo] = false); 
            (checkOne = -1, checkTwo = -1);
        }, 1000); 
    }
}
function checkWin() { 
    for(vis of gridVis) if(!vis) return;
    win = true; 
    render(); 
    return score; 
}

