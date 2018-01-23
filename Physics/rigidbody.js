class RigidBody{
    constructor(transform, mass, drag, angularDrag, useGravity){
      this.transform = transform;
      this.mass = mass;
      this.drag = drag;
      this.angularDrag = angularDrag;
      this.useGravity = useGravity;

      this.velocity = new vector2(0.0, 0.0);
      this.acceleration = new vector2(0.0, 0.0);
      this.angularVelocity = 0.0;
      this.angularAcceleration = 0.0;

      this.forces = [];
      this.torques = [];
    }

    step(timestep){
      calculateAccelerations();

      let velocChange = this.acceleration.multiply(timestep);
      velocChange = velocChange.substract(this.velocity.multiply(drag));
      this.velocity = this.velocity.add(velocChange);

      let angularVelocChange = this.angularAcceleration * timestep;
      angularVelocChange -= this.angularVelocity * this.angularDrag;
      this.angularVelocity += angularVelocChange;

      let posChange = this.velocity.multiply(timestep);
      this.transform.position = this.transform.position.add(posChange);

      this.transform.rotation += this.angularVelocity * timestep;
    }

    calculateAccelerations(){
      let accel = new vector2(0, 0);
      let angularAccel = 0;

      if (this.useGravity)
        accel.add(new vector2(0.0, 9.81));

      forces.forEach(f => {
        accel = accel.add(f.divide(this.mass));
      });

      torques.forEach(t => {
        angularAccel += t / this.mass;
      });

      forces = [];
      torques = [];
    }

    addForce(force){
      forces.push(force);
    }

    addTorque(torque){
      torques.push(torque);
    }

}