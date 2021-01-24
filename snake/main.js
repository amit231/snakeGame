
stopButton = document.getElementById('stopBtn')
moveDown = document.getElementById('down');
moveUp = document.getElementById('up');
moveRight = document.getElementById('right');
moveLeft = document.getElementById('left');

let stop = () => {
    clearInterval(loop)
}


let move_left = () => {
    console.log('left get clickedj')
    snake.direction = 'left';
}

let move_right = () => {
    console.log('right get clickedj')
    snake.direction = 'right';
}

let move_up = () => {
    console.log('up get clickedj')
    snake.direction = 'up';
}

let move_down = () => {
    console.log('down get clickedj')
    snake.direction = 'down';
}

function keyPressHandler(e) {
    switch (e.key) {
        case "ArrowLeft":
            // Left pressed
            move_left();
            break;
        case "ArrowRight":
            // Right pressed
            move_right();
            break;
        case "ArrowUp":
            // Up pressed
            move_up();
            break;
        case "ArrowDown":
            // Down pressed
            move_down();
            break;
    }
}



document.onkeydown = keyPressHandler;

moveDown.addEventListener('click', move_down)
moveUp.addEventListener('click', move_up)
moveRight.addEventListener('click', move_right)
moveLeft.addEventListener('click', move_left)
stopButton.addEventListener('click', stop)
function init() {

    board = {
        dimension: 698,
        cell: 698 / 20
    }
    canvas = document.getElementsByTagName('canvas')[0];
    innerHeight = innerWidth = canvas.height = canvas.width = board.dimension;
    pen = canvas.getContext('2d');


    snake = {
        cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
        initLen: 5,
        cellSize: board.cell,
        color: 'blue',
        head: this.initLen - 1,
        direction: 'right',
        draw: () => {
            pen.clearRect(0, 0, board.dimension, board.dimension);
            for (let i = 0; i < snake.cells.length; i++) {
                pen.fillRect(snake.cells[i].x * board.cell, snake.cells[i].y * board.cell, snake.cellSize - 2, snake.cellSize - 2);
            }
        }
    }
}

init();
function draw() {
    snake.draw();
}

function update() {
    console.log('update get called')
    let prev_cell_x;
    let prev_cell_y;
    if (snake.direction === 'right') {
        // console.log(' i am in right ')
        snake.cells.shift();
        prev_cell_x = snake.cells[snake.cells.length - 1].x;
        prev_cell_y = snake.cells[snake.cells.length - 1].y;
        prev_cell_x += 1;
        snake.cells.push({ x: prev_cell_x, y: prev_cell_y });
    }
    else if (snake.direction === 'down') {
        // console.log(' i am in down ')
        snake.cells.shift();
        prev_cell_x = snake.cells[snake.cells.length - 1].x;
        prev_cell_y = snake.cells[snake.cells.length - 1].y;
        prev_cell_y += 1;
        snake.cells.push({ x: prev_cell_x, y: prev_cell_y });
    }
    else if (snake.direction === 'left') {
        console.log(' i am in left ')
        snake.cells.shift();
        prev_cell_x = snake.cells[snake.cells.length - 1].x;
        prev_cell_y = snake.cells[snake.cells.length - 1].y;
        prev_cell_x -= 1;
        snake.cells.push({ x: prev_cell_x, y: prev_cell_y });
    }
    else if (snake.direction === 'up') {
        // console.log(' i am in down ')
        snake.cells.shift();
        prev_cell_x = snake.cells[snake.cells.length - 1].x;
        prev_cell_y = snake.cells[snake.cells.length - 1].y;
        prev_cell_y -= 1;
        snake.cells.push({ x: prev_cell_x, y: prev_cell_y });
    }
    // console.log(snake.cells)
    // snake.cells.push({ x: 5, y:
}


function gameLoop() {
    draw();
    update();
}

loop = setInterval(gameLoop, 100)