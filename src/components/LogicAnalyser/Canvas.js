import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  const { name, clk, waveform, signal, ...rest} = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    waveform.update(ctx, signal);
    // signal intentionally not in the list as update should only happen on clk changes
  }, [clk, waveform]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="waveform">
      <div className="name">{name}:</div>
      <canvas className="canvas" ref={canvasRef} {...rest}/>
    </div>
  );
};

export default Canvas;
