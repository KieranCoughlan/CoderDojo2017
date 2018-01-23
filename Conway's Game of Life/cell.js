class Cell {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.isActive = false;
        this.nextState = false;
        this.neighbours = [];
    }

    draw() {
        this.isActive = this.nextState;
        
        rectMode(CORNER);

        if (this.isActive == true){
            fill('GoldenRod');
            rect(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
        }
        else{
            stroke('DarkGreen');
            fill('black');
            rect(this.x, this.y, this.size, this.size);
        }
    }

    applyRules(){
        let numNeighbours = 0;
        for (let i = 0; i < this.neighbours.length; i++){
            if (this.neighbours[i].isActive == true){
                numNeighbours++;
            }
        }

        if (this.isActive == false){
          if (numNeighbours == 3){
            this.nextState = true;
          }
        }
        else {
          if (numNeighbours < 2 || numNeighbours > 3){
            this.nextState = false;
          }
        }
    }

    addNeighbour(other) {
        this.neighbours.push(other);

        if (other.isBomb) {
            this.surroundingBombs++;
        }
    }
}