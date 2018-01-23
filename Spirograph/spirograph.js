class Spirograph{
    constructor(centerX, centerY, rad0, rad1, speed0, speed1, colour){
        this.centerX = centerX;
        this.centerY = centerY;

        this.rad0 = rad0;
        this.rad1 = rad1;

        this.speed0 = speed0;
        this.speed1 = speed1;

        this.colour = colour;
        
        this.firstPoint = true;
        this.x = 0;
        this.y = 0;
        this.lastX = 0;
        this.lastY = 0;

        this.angle0 = 0;
        this.angle1 = 0;
    }

    show(){
        this.calculatePos();

        stroke(this.colour);

        if (this.firstPoint == true){
            this.firstPoint = false;           
        }
        else{
            line(this.lastX, this.lastY, this.x, this.y);
        }

        this.lastX = this.x;
        this.lastY = this.y;
    }

    calculatePos(){
        angleMode(DEGREES);

        this.angle0 += this.speed0;
        this.angle1 += this.speed1;
        
        this.x = this.centerX;
        this.y = this.centerY;
        
        this.x += this.rad0 * cos(this.angle0);
        this.y += this.rad0 * sin(this.angle0);

        this.x += this.rad1 * cos(this.angle1);
        this.y += this.rad1 * sin(this.angle1);
    }
}