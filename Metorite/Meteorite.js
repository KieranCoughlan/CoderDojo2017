class Meteorite {
  constructor(target, speed) {
    this.start = createVector(random(0, width), 0);
    this.target = target;
    this.speed = speed;

    this.pos = this.start.copy();

    this.active = true;

    this.end = createVector(target.pos.x + target.width / 2, target.pos.y);

    this.direction = p5.Vector.sub(this.end, this.start);
    this.direction.normalize();

    this.target.targeted = true;
  }

  move() {
    if (this.active == false)
      return;

    let moveDist = p5.Vector.mult(this.direction, this.speed);
    this.pos.add(moveDist);

    if (this.pos.y > height - GROUNDHEIGHT || this.target.checkHit(this)) {
      this.disable();
      return;
    }

    for (let i = 0; i < explosions.length; i++) {
      if (explosions[i].checkHit(this)) {
        this.disable();
        return;
      }
    }
  }

  show() {
    if (this.active == false)
      return;

    stroke('red');
    fill('red');
    line(this.start.x, this.start.y, this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 10);
  }

  disable() {
    this.active = false;
    this.target.targeted = false;
  }
}