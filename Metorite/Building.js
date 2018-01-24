class Building{
    constructor(){
        this.x = random(0, width);
        this.width = random(20, 40);
        this.height = random(30, 150);
        this.y = height - GROUNDHEIGHT - this.height;
        this.colour = random(['DarkGrey', 'DimGrey', 'Gainsboro', 
                              'Grey', 'LightGrey', 'Silver', 'WhiteSmoke']);
    }

    show(){
        fill(this.colour);
        rect(this.x, this.y, this.width, this.height);
    }

    checkHit(meteorite){
        if (meteorite.y > this.y && meteorite.y <  this.y + this.height &&
            meteorite.x > this.x && meteorite.x < this.x + this.width){
            return true;
        }
            
        return false;
    }
}