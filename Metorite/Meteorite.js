class Meteorite{
    constructor(target, speed){
        this.start = createVector(random(0, width), 0);
        this.target = target;
        this.speed = speed;

        this.pos = this.start.copy();

        this.active = true;

        this.end = createVector(target.x + target.width/2, target.y);

        this.direction = p5.Vector.sub(this.end, this.start);
        this.direction.normalize();
    }

    move(){
      let moveDist = p5.Vector.mult(this.direction, this.speed);
      this.pos.add(moveDist);
    }

    show(){
      if (this.active == false)
        return;

      stroke('red');
      fill('red');
      line(this.start.x, this.start.y, this.pos.x, this.pos.y);
      ellipse(this.pos.x, this.pos.y, 10);
    }
}