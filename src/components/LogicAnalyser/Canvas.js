import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectClock } from '../../features/clock/clockSlice';
// import useCanvas from './CanvasHook';

import { waveform } from './lib/Draw';

const Canvas = props => {
  const clk = useSelector(selectClock);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    waveform(context, {clk});
  }, [clk]);

  return (
    <div>
      <span>CANVAS:</span> <canvas ref={canvasRef} {...props}/>
    </div>
  );
};

export default Canvas;
