
class Waveform {
  constructor(x, y, strokeStyle) {
    this.startX = x;
    this.startY = y;
    this.currentX = x;
    this.currentY = y;
    this.size = 15;
    this.strokeStyle = strokeStyle;
  }

  update(ctx, signal) {
    const xStart = this.currentX;
    const xEnd = this.currentX + this.size;
    this.currentX = xEnd;
    const yStart = signal ? this.size : 0;
    const yEnd = signal ? 0 : this.size;

    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yEnd);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  };

};

export default Waveform;