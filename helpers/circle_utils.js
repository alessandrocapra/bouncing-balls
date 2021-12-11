function shapeDimensionsBetween(min, max) {
  if (min >= max) {
    throw new RangeError("The min value should be lower than the max");
  }
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = shapeDimensionsBetween;
