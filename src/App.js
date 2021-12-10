import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { ClickCoordinates } from "./interfaces/App.interface";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = styled.canvas`
  border: 1px solid #000;
`;

const gravity = 0.1;

class Circle {
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

function App() {
  let ref = useRef();
  let canvas = ref.current;
  let circlesArray = [];

  console.log("[App]");

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    let requestId;

    console.log("[useEffect]");

    const render = () => {
      console.log("[render in useEffect]");
      context.clearRect(0, 0, 700, 500);
      for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].fall();
      }
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  const getClickCoordinates = (event, canvas) => {
    const boundaries = canvas.getBoundingClientRect();
    const x = event.clientX - boundaries.left;
    const y = event.clientY - boundaries.top;

    return { x, y };
  };

  const addCircle = (event) => {
    if (canvas != null && canvas.getContext) {
      let context = canvas.getContext("2d");
      console.log("[addCircle]");

      let circle = new Circle(
        context,
        30,
        getClickCoordinates(event, canvas),
        0
      );
      circle.draw();

      circlesArray.push(circle);
    } else {
      // canvas-unsupported code here
    }
  };

  return (
    <Layout>
      <Canvas ref={ref} width={700} height={500} onClick={addCircle}>
        <p>Canvas element not supported by the browser you're using</p>
      </Canvas>
    </Layout>
  );
}

export default App;
