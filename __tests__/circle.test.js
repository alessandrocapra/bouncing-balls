const circle = require("../components/circle");
const { createCanvas } = require("canvas");
const { expect, beforeEach } = require("@jest/globals");
const canvas = createCanvas(500, 500);
const context = canvas.getContext("2d");

describe("Circle component", () => {
  let c;

  beforeEach(() => {
    c = new circle(50, { x: 100, y: 100 }, 0, context);
  });

  test("create circle and check its initial position", () => {
    c.draw();

    expect(c.getPosition()).toEqual({ x: 100, y: 100 });
  });

  test("create circle and check it moved after calling the fall function", () => {
    c.fall();

    expect(c.getPosition()).toEqual({ x: 100, y: 100.1 });
  });
});
