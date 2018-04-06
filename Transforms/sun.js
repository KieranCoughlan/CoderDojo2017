class Sun {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        fill("yellow");
        strokeWeight(4);
        stroke("orange");
        ellipse(this.x, this.y, 50, 50);
    }
}