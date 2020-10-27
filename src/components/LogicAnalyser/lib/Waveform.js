
class Waveform {
  constructor(strokeStyle = '#0000FF') {
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.width = 10;
    this.height = 15;
    this.strokeStyle = strokeStyle;
    this.currentSignal = 0;
  }

  update(ctx, signal) {
    const xStart = this.currentX;
    const yStart = this.currentY;
    const xEnd = this.currentX + this.width;
    this.currentX = xEnd;
    let yEnd;
    if (this.currentSignal !== signal) {
      yEnd = this.currentSignal ? this.height : 0;
    } else {
      yEnd = this.currentSignal ? 0 : this.height;
    }

    this.currentY = yEnd;

    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yEnd);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    this.currentSignal = signal;
  };

};

export default Waveform;