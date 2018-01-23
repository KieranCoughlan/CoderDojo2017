class World {
    constructor(size, cols, rows) {
        this.size = size;
        this.cols = cols;
        this.rows = rows;
        this.rulesPaused = true;

        this.makeCells();
        this.assignNeighbours();
    }

    draw() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j].draw();
            }
        }

        if (this.rulesPaused == true){
          return;
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j].applyRules();
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

        this.cells[row][col].nextState = !this.cells[row][col].isActive;
    }

    togglePause(){
      this.rulesPaused = !this.rulesPaused;
    }

    makeCells() {
        this.cells = [];
        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.cols; j++) {
                let x = j * this.size;
                let y = i * this.size;
                this.cells[i][j] = new Cell(x, y, this.size);
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
}