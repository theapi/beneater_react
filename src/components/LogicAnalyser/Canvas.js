import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectClock } from '../../features/clock/clockSlice';
// import useCanvas from './CanvasHook';

//import Waveform from './lib/Waveform';

const Canvas = props => {
  const { waveforms, ...rest} = props;
  const clk = useSelector(selectClock);
  const canvasRef = useRef(null);

  const { clkWave } = waveforms;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    clkWave.update(ctx, clk);
  }, [clk, clkWave]);

  return (
    <div>
      <span>CANVAS:</span> <canvas ref={canvasRef} {...rest}/>
    </div>
  );
};

export default Canvas;
