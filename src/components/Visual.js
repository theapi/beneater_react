import React from 'react';
import { useSelector } from 'react-redux';

import Led from './Led';
import Controller from '../components/LogicAnalyser/Controller';
import Canvas from '../components/LogicAnalyser/Canvas';

import { selectClock } from '../features/clock/clockSlice';

import '../css/visual.css';

const Visual = () => {
  const clk = useSelector(selectClock);

  // const draw = (ctx, frameCount) => {
  //   ctx.beginPath();
  //   ctx.moveTo(20, 20);
  //   ctx.lineTo(20, 100);
  //   ctx.lineTo(70, 100);
  //   ctx.stroke();
  // };

  return (
    <div id="visual">

      <h6>A visual representation of what's happening inside the cpu goes here</h6>

      <Led on={clk}  />
      <Controller />
      <Canvas width="600" height="200" class="canvas" />

    </div>
  );
}

export default Visual;
