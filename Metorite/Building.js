class Building{
    constructor(){
        this.x = random(0, width);
        this.width = random(20, 40);
        this.height = random(30, 150);
        this.y = height - GROUNDHEIGHT - this.height;
        this.colour = random(['DarkGrey', 'DimGrey', 'Gaineboro', 
                              'Grey', 'LightGrey', 'Silver', 'WhiteSmoke']);
        this.destroyed = false;
    }

    show(){
        if (this.destroyed == true){
            return;
        }
      
        fill(this.colour);
        rect(this.x, this.y, this.width, this.height);
    }

    checkHit(meteorite){
        let top = this.y - this.height/2;
        let bottom = this.y + this.height/2;
        let left = this.x - this.width/2;
        let right = this.x + this.width/2;

        if (meteorite.x > top && meteorite.x < bottom &&
            meteorite.y > left && meteorite.y < right){
            this.destroyed = true;
            return true;
        }
            
        return false;
    }
}