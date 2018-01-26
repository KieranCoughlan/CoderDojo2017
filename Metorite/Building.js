class Building {
    constructor() {
        this.width = random(20, 40);
        this.height = random(30, 150);

        this.pos = createVector(random(0, width),
            height - GROUNDHEIGHT - this.height);
        this.colour = random(['DarkGrey', 'DimGrey', 'Gainsboro',
            'Grey', 'LightGrey', 'Silver', 'WhiteSmoke']);

        this.active = true;
        this.targeted = false;
    }

    show() {
        if (this.active == false)
            return;

        fill(this.colour);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    checkHit(meteorite) {
        if (meteorite.pos.y > this.pos.y && meteorite.pos.y < this.pos.y + this.height &&
            meteorite.pos.x > this.pos.x && meteorite.pos.x < this.pos.x + this.width) {
            this.active = false;
        }
    }
}