const shapeDimensionsBetween = require("../helpers/circle_utils");

describe("Utilities", () => {
  test("shapeDimensions should throw range error when min >= max", () => {
    // passing as callback because toThrowError needs a reference to a function
    expect(() => shapeDimensionsBetween(100, 50)).toThrowError(RangeError);
  });
});
