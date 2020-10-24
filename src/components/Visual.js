import React from 'react';
import { useSelector } from 'react-redux';

import Led from './Led';
import Controller from '../components/LogicAnalyser/Controller';
import Canvas from '../components/LogicAnalyser/Canvas';

import { selectClock } from '../features/clock/clockSlice';
import { selectControlWord } from '../features/controller/controllerSlice';

import '../css/visual.css';

import Waveform from './LogicAnalyser/lib/Waveform';

const clkWave = new Waveform(0, 0, '#0000FF');
const ceWave = new Waveform(0, 0, '#0000FF');

const Visual = () => {
  const clk = useSelector(selectClock);
  const controlWord = useSelector(selectControlWord);
  const { ce } = controlWord;

  return (
    <div id="visual">

      <h6>A visual representation of what's happening inside the cpu goes here</h6>

      <Led on={clk}  />
      <Controller />
      <Canvas width="600" height="20" className="canvas"
        name="Clock" clk={clk} waveform={clkWave} signal={clk} />
      <Canvas width="600" height="20" className="canvas"
        name="Clock" clk={clk} waveform={ceWave} signal={ce} />
    </div>
  );
}

export default Visual;
