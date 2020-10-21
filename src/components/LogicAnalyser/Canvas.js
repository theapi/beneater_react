import React from 'react';

import useCanvas from './CanvasHook';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const Canvas = props => {
  const { draw, ...rest } = props

  const canvasRef = useCanvas(draw);
  return <canvas ref={canvasRef} {...rest}/>;

  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   let frameCount = 0;
  //   let frameId;

  //   const render = () => {
  //     frameCount++;
  //     draw(ctx, frameCount);
  //     frameId = window.requestAnimationFrame(render);
  //   };
  //   render();

  //   return () => {
  //     window.cancelAnimationFrame(frameId);
  //   };

  //   // ctx.fillStyle = '#0000FF';
  //   // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // }, [draw]);

  // return <canvas ref={canvasRef} {...props} />
};

export default Canvas;
