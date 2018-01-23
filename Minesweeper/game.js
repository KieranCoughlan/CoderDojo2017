let board;
let gameOver;
let winner;

function setup() {
    createCanvas(400, 400);

    board = new Board(40, 10, 10, 0.1);
    gameOver = false;
    winner = false;
}

function draw() {
    background('black');
    textAlign(CENTER, CENTER);
    textSize(48);

    if (winner == true) {
        fill('white');
        text("You Win!", width / 2, height / 2);
    }
    else {
        board.draw();

        if (gameOver == true){
            fill('Red');
            text("Game Over!", width / 2, height / 2);
        }
    }
}

function mouseClicked() {
    if (gameOver == false && winner == false) {
        gameOver = board.onMouseClick(mouseX, mouseY);
        winner = board.checkForWin();
    }
}
