
const getSize = () => 15;

const incrementPosX = (() => {
  const size = getSize();
  let i = 0;
  return () => {
      return i += size;
  }
})();

export const waveform = (ctx, { clk }) => {
  const size = getSize();
  const posX = incrementPosX(size);

  const xStart = posX - size;
  const yStart = clk ? size : 0;
  const yEnd = clk ? 0 : size;

  ctx.strokeStyle = "#0000FF";
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xStart, yEnd);
  ctx.lineTo(posX, yEnd);
  ctx.stroke();
};

export default {
  waveform,
};
