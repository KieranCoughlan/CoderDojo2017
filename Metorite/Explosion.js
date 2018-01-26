class Explosion {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.length = 100;
        this.count = 0;
        this.minRadius = 10;
        this.maxRadius = 100;
        this.radius = this.min;
        this.startColour = color('orange');
        this.endColour = color('white');
    }

    show() {
        if (this.count > this.length)
            return;

        let progress = this.count / this.length;

        let fillColour = lerpColor(this.startColour, this.endColour, progress);
        fill(fillColour);

        this.radius = lerp(this.minRadius, this.maxRadius, progress);
        ellipse(this.pos.x, this.pos.y, this.radius);

        this.count++;
    }

    checkHit(meteorite) {
        if (this.count > this.length)
            return false;

        let distance = this.pos.dist(meteorite.pos);

        return distance <= this.radius;
    }
}