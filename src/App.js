import styled from "styled-components";
import { useEffect, useRef } from "react";
// import { ClickCoordinates } from "./interfaces/App.interface";
import Circle from "./components/Circle";

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
