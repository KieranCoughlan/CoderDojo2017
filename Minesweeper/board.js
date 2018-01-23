class Board {
    constructor(size, cols, rows, bombChance) {
        this.size = size;
        this.cols = cols;
        this.rows = rows;
        this.bombChance = bombChance;

        this.makeCells();
        this.assignNeighbours();
    }

    draw() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j].draw();
            }
        }
    }

    onMouseClick(x, y) {
        let row = Math.floor(y / this.size);
        let col = Math.floor(x / this.size);

        if (row < 0 || row >= this.rows ||
            col < 0 || col >= this.cols) {
            return;
        }

        return this.cells[row][col].open();
    }

    makeCells() {
        this.cells = [];
        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.cols; j++) {
                let x = j * this.size;
                let y = i * this.size;
                this.cells[i][j] = new Cell(x, y, this.size, this.bombChance);
            }
        }
    }

    assignNeighbours() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.getNeighboursFor(i, j);
            }
        }
    }

    getNeighboursFor(row, col) {
        let fromRow = Math.max(row - 1, 0);
        let toRow = Math.min(row + 2, this.rows);
        let fromCol = Math.max(col - 1, 0);
        let toCol = Math.min(col + 2, this.cols);

        for (let i = fromRow; i < toRow; i++) {
            for (let j = fromCol; j < toCol; j++) {
                if (i == row && j == col) {
                    continue;
                }

                this.cells[row][col].addNeighbour(this.cells[i][j]);
            }

        }
    }

    checkForWin() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {

                if (this.cells[i][j].isOpen == false &&
                    this.cells[i][j].isBomb == false) {
                    return false;
                }
            }
        }

        return true;
    }
}