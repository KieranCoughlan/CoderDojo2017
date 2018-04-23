// This is just a slightly hacked version of Continent that itterates 
// on a frame-by-frame basis

class ContinentDyn {
    constructor (size, itterations, displacement){
        this.size = size;
        this.itterations = itterations;
        this.displacement = displacement;
        this.ittersDone = 0;
        this.vertices = [];
        
        this.createInitialVertices();
        this.displaceVertices(this.displacement);
    }

    show() {
      fill("green");

      beginShape();

      for (let i = 0; i < this.vertices.length; i++){
          vertex(this.vertices[i].x, this.vertices[i].y);
      }

      endShape(CLOSE);

      if (this.ittersDone < this.itterations){
        this.subdivideVertices();
        this.ittersDone++;
      }
    }

    createInitialVertices(){
        this.vertices.push(createVector(-this.size / 2, -this.size / 2));
        this.vertices.push(createVector(this.size / 2, -this.size / 2));
        this.vertices.push(createVector(this.size / 2, this.size / 2));
        this.vertices.push(createVector(-this.size / 2, this.size / 2));
    }

    subdivideVertices(){
        this.doubleVertices();
        this.displaceVertices(this.displacement / pow(2, this.ittersDone));
    }
    
    doubleVertices(){
        let newVertices = [];
        let numVertices = this.vertices.length;

        for (let i = 0; i < numVertices; i++){
            let nextPointIndex = i + 1;
            if (nextPointIndex == numVertices){
                nextPointIndex = 0;
            }

            let midPoint = p5.Vector.add(this.vertices[i], this.vertices[nextPointIndex]);
            midPoint.div(2);

            newVertices.push(this.vertices[i]);
            newVertices.push(midPoint);
        }

        this.vertices = newVertices;
    }

    displaceVertices(disp){
        for (let i = 0; i < this.vertices.length; i++){
            let displacement = createVector(random(-disp, disp), random(-disp, disp));
            this.vertices[i].add(displacement);
        }
    }

}