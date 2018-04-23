// Continent class - starts with a square of vertices and subdivides each edge, while
// randomly displacing the vertices, a requested number of times

class Continent {

    // size : the initial size of the square
    // itterations : the number of times to subdivide the edges
    // displacement : the amount to displace each vertex 
    //                (we half this for each subesquent itteration)
    constructor (size, itterations, displacement){
        this.size = size;
        this.itterations = itterations;
        this.displacement = displacement;
        this.vertices = []; // An empty array
        
        // Create the vertices
        this.createInitialVertices();
        // Optional: can displace immediately after creation
        // to make the shape less "square"
        this.displaceVertices(this.displacement); 

        // Subdivide them
        this.subdivideVertices();
    }

    // Draw the continent with a green fill
    show() {
      fill("green");

      beginShape();

      for (let i = 0; i < this.vertices.length; i++){
          vertex(this.vertices[i].x, this.vertices[i].y);
      }

      endShape(CLOSE);
    }

    // Create a square of vertices around (0, 0)
    createInitialVertices(){
        this.vertices.push(createVector(-this.size / 2, -this.size / 2));
        this.vertices.push(createVector(this.size / 2, -this.size / 2));
        this.vertices.push(createVector(this.size / 2, this.size / 2));
        this.vertices.push(createVector(-this.size / 2, this.size / 2));
    }

    // Subdivide the edges the reqested number of times
    subdivideVertices(){
        // Loop over the number of requested itterations
        for (let i = 0; i < this.itterations; i++){
            // Double up the vertices
            this.doubleVertices();

            // Displace each vertex. The displacment we actually use for each pass is
            // effectively we halved each time. First full displacement, then half, 
            // then quarter, then eighth, etc.
            // If you do this don't the shape doesn't look like land (remove the "/ pow(2.0, i)" below to see)
            this.displaceVertices(this.displacement / pow(2.0, i));
        }
    }
    
    // Double up the vertices
    doubleVertices(){
        // Create a new list for the updated vertices and
        // take the length of the current list
        let newVertices = [];
        let numVertices = this.vertices.length;

        // Loop over the vertices
        for (let i = 0; i < numVertices; i++){

            // Figure out what the next point is. It's either the next point in the list,
            // or the first point if we're at the end
            let nextPointIndex = i + 1;
            if (nextPointIndex == numVertices){
                nextPointIndex = 0;
            }

            // Calculate an vector that's half way between these (A+B)/2
            let midPoint = p5.Vector.add(this.vertices[i], this.vertices[nextPointIndex]);
            midPoint.div(2);

            // Add the current vertex and our new midpoint to the new list
            newVertices.push(this.vertices[i]);
            newVertices.push(midPoint);
        }

        // Replace the old vertex list with our new one
        this.vertices = newVertices;
    }

    // Displace each vertex by an amount
    displaceVertices(disp){
        for (let i = 0; i < this.vertices.length; i++){
            // Create a vector that's plus or minus disp in both X and Y
            let displacement = createVector(random(-disp, disp), random(-disp, disp));

            // Add that to our vertex
            this.vertices[i].add(displacement);
        }
    }

}