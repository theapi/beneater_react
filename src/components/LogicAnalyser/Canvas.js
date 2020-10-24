import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  const { name, clk, waveform, signal, ...rest} = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    waveform.update(ctx, signal);
  }, [clk, waveform]); // signal intentionally not in the list as update should only happen on clk changes

  return (
    <div>
      <span>{name}:</span> <canvas ref={canvasRef} {...rest}/>
    </div>
  );
};

export default Canvas;
