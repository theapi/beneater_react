import React from 'react';
import { useSelector } from 'react-redux';

import Led from './Led';
import Controller from '../components/LogicAnalyser/Controller';
import Canvas from '../components/LogicAnalyser/Canvas';

import { selectClock } from '../features/clock/clockSlice';

import '../css/visual.css';

const Visual = () => {
  const clk = useSelector(selectClock);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#0000FF';

    ctx.beginPath();
    // ctx.arc(50, 100, 20, 0, 2*Math.PI);
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
    ctx.fill();
  };

  return (
    <div id="visual">

      <h6>A visual representation of what's happening inside the cpu goes here</h6>

      <Led on={clk}  />
      <Controller />
      <Canvas draw={draw} width="600" height="200"/>

    </div>
  );
}

export default Visual;
