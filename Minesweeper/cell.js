class Cell {
    constructor(x, y, size, bombchance) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.isBomb = random() < bombchance;
        this.isOpen = false;
        this.neighbours = [];
        this.surroundingBombs = 0;
    }

    draw() {
        if (this.isOpen == false){
            fill('darkGrey');
            rectMode(CORNER);
            rect(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
        }
        else if (this.isBomb){
            fill('red');
            ellipseMode(CORNER);
            ellipse(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
        }
        else if (this.surroundingBombs > 0){
            fill('white');
            textAlign(CENTER, CENTER);
            textSize(20);
            text(this.surroundingBombs, this.x + this.size / 2, this.y + this.size / 2);
        }
    }

    open() {
        if (this.isOpen) {
            return false;
        }

        this.isOpen = true;

        if (this.isBomb) {
            return true;
        }

        for (let i = 0; i < this.neighbours.length; i++) {
    
            if (this.neighbours[i].isBomb){
                continue;
            }

            if (this.neighbours[i].surroundingBombs == 0) {
                this.neighbours[i].open();
            }
            else{
                this.neighbours[i].isOpen = true;
            }
        }

        return false;
    }

    addNeighbour(other) {
        this.neighbours.push(other);

        if (other.isBomb) {
            this.surroundingBombs++;
        }
    }
}