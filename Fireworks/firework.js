class Firework{
    constructor(speed, colour, minSize, maxSize, explodeTime, explodeLength){
        this.launched = false;
        this.position = createVector(0,0);
        this.speed = speed;
        this.colour = colour;
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.explodeAt = explodeTime;
        this.explodeLength = explodeLength;
        
        this.children = [];

        this.time = 0;
    }

    launch(position, speed){
        this.launched = true;
        this.position = position;
        this.speed = p5.Vector.add(this.speed, speed);
    }

    draw(timestep, gravity){
        if (this.launch == false)
          return;
        
        this.time += timestep;

        this.speed = p5.Vector.add(this.speed, p5.Vector.mult(gravity, timestep));
        this.position = p5.Vector.add(this.position, p5.Vector.mult(this.speed, timestep));
        
        fill(this.colour);
        ellipse(this.position.x, this.position.y, this.getSize());

        if (this.time >= this.explodeAt) {
            for (let i = 0; i < this.children.length; i++)
            {
                if (this.children[i].launched == false){
                  this.children[i].launch(this.position, this.speed);
                }
    
                this.children[i].draw(timestep, gravity);
            }
        }
    }

    getSize(){
        if (this.time < this.explodeAt)
          return this.minSize;

        if (this.time > this.explodeAt + this.explodeLength)
          return 0;

        let t = this.time - this.explodeAt;
        let deltaSize = this.maxSize - this.minSize;

        return this.maxSize - (deltaSize *  (t / this.explodeLength));
    }
}