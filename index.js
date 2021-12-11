// Sources for implementation
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
// Plus some StackOverflow posts for encountered errors

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let circlesArray = [];

canvas.addEventListener(
  "click",
  function (ev) {
    // calculate position relative to the canvas itself
    const boundaries = canvas.getBoundingClientRect();
    const x = ev.clientX - boundaries.left;
    const y = ev.clientY - boundaries.top;

    circlesArray.push(
      new circle(shapeDimensionsBetween(20, 80), { x, y }, 0, canvas)
    );
  },
  false
);

// looping function to keep updating the canvas
function animate() {
  requestAnimationFrame(animate);

  context.clearRect(0, 0, 700, 500);
  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].fall();
  }
}

animate();
