class Tree {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        translate(this.x, this.y);
        scale(2, 2);
        rectMode(CENTER);

        fill('brown');
        rect(0, -10, 20, 20);
        fill('green');
        triangle(-20, -20, 20, -20, 0, -80);
    }
}