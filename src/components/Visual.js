import React from 'react';
import { useSelector } from 'react-redux';

import Led from './Led';
import Controller from '../components/LogicAnalyser/Controller';
import Canvas from '../components/LogicAnalyser/Canvas';

import { selectClock } from '../features/clock/clockSlice';
import { selectControlWord } from '../features/controller/controllerSlice';

import '../css/visual.css';

import Waveform from './LogicAnalyser/lib/Waveform';

const waves = [];
waves['clk'] = new Waveform();
waves['jc'] = new Waveform();
waves['j'] = new Waveform();
waves['ce'] = new Waveform();
waves['co'] = new Waveform();
waves['oi'] = new Waveform();
waves['bi'] = new Waveform();
waves['su'] = new Waveform();
waves['eo'] = new Waveform();
waves['ao'] = new Waveform();
waves['ai'] = new Waveform();
waves['ii'] = new Waveform();
waves['io'] = new Waveform();
waves['ro'] = new Waveform();
waves['ri'] = new Waveform();
waves['mi'] = new Waveform();
waves['hlt'] = new Waveform();

const Visual = () => {
  const clk = useSelector(selectClock);
  const controlWord = useSelector(selectControlWord);

  const width = 600;
  const height = 20;
  return (
    <div id="visual">

      <h6>A visual representation of what's happening inside the cpu goes here</h6>

      <Led on={clk}  />
      <Controller />
      <div className="logicAnalyser">

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Clock" waveform={waves['clk']} signal={clk} />

        {/* Fetch */}
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Counter Out" waveform={waves['co']} signal={controlWord.co} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="MAR in" waveform={waves['mi']} signal={controlWord.mi} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="RAM out" waveform={waves['ro']} signal={controlWord.ro} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Instruction in" waveform={waves['ii']} signal={controlWord.ii} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Counter Enable" waveform={waves['ce']} signal={controlWord.ce} />
        {/* end fetch */}

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Instruction out" waveform={waves['io']} signal={controlWord.io} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Subtract" waveform={waves['su']} signal={controlWord.su} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="A register in" waveform={waves['ai']} signal={controlWord.ai} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="B register in" waveform={waves['bi']} signal={controlWord.bi} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="ALU out" waveform={waves['eo']} signal={controlWord.eo} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="A register out" waveform={waves['ao']} signal={controlWord.ao} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Output register in" waveform={waves['oi']} signal={controlWord.oi} />

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="RAM in" waveform={waves['ri']} signal={controlWord.ri} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Jump" waveform={waves['j']} signal={controlWord.j} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Jump conditional" waveform={waves['jc']} signal={controlWord.jc} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Halt" waveform={waves['hlt']} signal={controlWord.hlt} />

      </div>
    </div>
  );
}

export default Visual;
