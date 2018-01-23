class vector2{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }

    add(other){
        return new vector2(this.x + other.x, this.y + other.y);
    }

    subtract(other){
        return new vector2(this.x - other.x, this.y - other.y);
    }

    multiply(val){
        return new vector2(this.x * val, this.y * val);
    }

    divide(val){
        return new vector2(this.x / val, this.y / val);
    }

    get magnitude(){
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    get normalised(){
        return this.divide(this.magnitude);
    }

    static distance(v0, v1){
        return v0.sub(v1).magnitude;
    }

    static dot(other){
        return ((this.x * other.x) + (this.y * other.y));
    }
}