class Explosion{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.length = 100;
        this.count = 0;
        this.minRadius = 10;
        this.maxRadius = 100;
        this.radius = this.min;
        this.startColour = color('orange');
        this.endColour = color('white');
    }

    show(){
        if (this.count > this.length)
          return;

        let progress = this.count / this.length;

        let fillColour = lerpColor(this.startColour, this.endColour, progress);
        fill(fillColour);

        this.radius = lerp(this.minRadius, this.maxRadius, progress);
        ellipse(this.x, this.y, this.radius);

        this.count++;
    }

    checkHit(meteorite){
        let distance = dist(this.x, this.y, meteorite.x, meteorite.y);
        
        return distance <= this.radius;
    }
}