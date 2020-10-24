import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  const { name, waveform, signal, ...rest} = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    waveform.update(ctx, signal);
  }, [signal, waveform]);

  return (
    <div>
      <span>{name}:</span> <canvas ref={canvasRef} {...rest}/>
    </div>
  );
};

export default Canvas;
