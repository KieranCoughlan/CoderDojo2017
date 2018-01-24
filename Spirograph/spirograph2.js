class Spirograph2 {
    constructor(center, radii, speeds, colour) {
        this.center = center;
        this.radii = radii;
        this.speeds = speeds;
        this.colour = colour;

        this.numAxes = min(radii.length, speeds.length);

        this.firstPoint = true;
        this.point = createVector(0, 0);
        this.lastPoint = createVector(0, 0);

        this.angles = [];
        for( let i = 0; i < this.numAxes; i++) {
            this.angles.push(0);
        }
    }

    show() {
        this.calculatePos();

        stroke(this.colour);

        if (this.firstPoint == true) {
            this.firstPoint = false;
        }
        else {
            line(this.lastPoint.x, this.lastPoint.y, this.point.x, this.point.y);
        }

        this.lastPoint = this.point;
    }

    calculatePos() {
        angleMode(DEGREES);

        this.point = this.center.copy();

        for( let i = 0; i < this.numAxes; i++) {
            this.angles[i] += this.speeds[i];
            this.point.add(this.radii[i] * cos(this.angles[i]), this.radii[i] * sin(this.angles[i]));
        }

    }
}