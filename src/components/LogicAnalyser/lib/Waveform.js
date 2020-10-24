
class Waveform {
  constructor(x, y, strokeStyle) {
    console.log('construct');
    this.startX = x;
    this.startY = y;
    this.currentX = x;
    this.currentY = y;
    this.size = 15;
    this.strokeStyle = strokeStyle;
  }

  update(ctx, clk) {
    console.log(this.currentX);
    const xStart = this.currentX;
    const xEnd = this.currentX + this.size;
    this.currentX = xEnd;
    const yStart = clk ? this.size : 0;
    const yEnd = clk ? 0 : this.size;
    console.log(this.currentX);
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yEnd);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  };

};

export default Waveform;