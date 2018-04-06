class Snake{
    constructor(pos, size){
        this.pos = pos;
        this.size = size;
        this.direction = 0;
        this.positions = [];
        this.positions.push(pos);
        this.maxLength = 30;
    }

    turnRight(){
        if (this.direction == 0){
            this.direction = 3;
        }
        else {
            this.direction--;
        }
          
    }

    turnLeft(){
        if (this.direction == 3){
          this.direction = 0;
        }
        else {
            this.direction++;
        }
    }

    updatePos(){
        if (this.direction == 0){
            // Right
            this.pos.add(createVector(this.size, 0));
        }
        else if (this.direction == 1) {
            // Up
            this.pos.add(createVector(0, -this.size));
        }
        else if (this.direction == 2) {
            // Left
            this.pos.add(createVector(-this.size, 0));
        }
        else if (this.direction == 3) {
            // Down
            this.pos.add(createVector(0, this.size));
        }
    }

    move() {
        if (this.positions.length >= this.maxLength) {
            this.positions.splice(0, 1);
        }
 
        this.updatePos();
        this.positions.push(this.pos.copy());
    }
    
    show(){
       rectMode(CENTER);
       fill('yellow');

       for (let i = 0; i < this.positions.length; i++) {
          rect(this.positions[i].x, this.positions[i].y, this.size, this.size);
       }
    }
}