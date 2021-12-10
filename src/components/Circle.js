const gravity = 0.1;

export default class Circle {
  constructor(context, radius, position, velocity) {
    this.context = context;
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI
    );
    this.context.fill();
    this.context.closePath();
  }

  fall() {
    if (this.position.y + this.radius > 500) {
      this.velocity = -this.velocity;
    } else {
      this.velocity += gravity;
    }
    this.position.y += this.velocity;

    this.draw();
  }
}
