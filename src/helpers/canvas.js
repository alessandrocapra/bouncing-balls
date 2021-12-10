export const getClickCoordinates = (event, canvas) => {
  const boundaries = canvas.getBoundingClientRect();
  const x = event.clientX - boundaries.left;
  const y = event.clientY - boundaries.top;

  return { x, y };
};
