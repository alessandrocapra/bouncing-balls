// Sources for implementation
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations#adding_velocity

function circle(radius, position, velocity, canvas) {
  this.radius = radius;
  this.position = position;
  this.velocity = velocity;
  this.context = canvas.getContext("2d");
  this.gravity = 0.1;

  this.getPosition = function () {
    return this.position;
  };

  this.draw = function () {
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
  };

  this.fall = function () {
    // update velocity after touching ground
    if (this.position.y + this.radius > canvas.height) {
      this.velocity = -this.velocity;
    } else {
      this.velocity += this.gravity;
    }
    this.position.y += this.velocity;

    this.draw();
  };
}

module.exports = circle;
