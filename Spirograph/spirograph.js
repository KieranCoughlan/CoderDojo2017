class Spirograph {
    constructor(center, radius0, radius1, speed0, speed1, colour) {
        this.center = center;
        this.radius0 = radius0;
        this.radius1 = radius1;
        this.speed0 = speed0;
        this.speed1 = speed1;
        this.colour = colour;

        this.firstPoint = true;
        this.point = createVector(0, 0);
        this.lastPoint = createVector(0, 0);
        this.angle0 = 0;
        this.angle1 = 0;
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

        this.angle0 += this.speed0;
        this.angle1 += this.speed1;

        this.point = this.center.copy();

        this.point.add(this.radius0 * cos(this.angle0), this.radius0 * sin(this.angle0));
        this.point.add(this.radius1 * cos(this.angle1), this.radius1 * sin(this.angle1));
    }
}