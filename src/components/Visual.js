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
waves['clk'] = new Waveform('#dc143c');
waves['jc'] = new Waveform('#00004f');
waves['j'] = new Waveform('#00004f');
waves['ce'] = new Waveform('#051700');
waves['co'] = new Waveform('#051700');
waves['oi'] = new Waveform();
waves['bi'] = new Waveform();
waves['su'] = new Waveform();
waves['eo'] = new Waveform();
waves['ao'] = new Waveform();
waves['ai'] = new Waveform();
waves['ii'] = new Waveform('#051700');
waves['io'] = new Waveform();
waves['ro'] = new Waveform('#051700');
waves['ri'] = new Waveform();
waves['mi'] = new Waveform('#051700');
waves['hlt'] = new Waveform('#000000');

const Visual = () => {
  const clk = useSelector(selectClock);
  const controlWord = useSelector(selectControlWord);

  const width = 600;
  const height = 20;
  return (
    <div id="visual">

      <div className="logicAnalyser">

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name="Clock" waveform={waves['clk']} signal={clk} />

        {/* Fetch */}
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Counter out [co ${controlWord.co}]`} waveform={waves['co']} signal={controlWord.co} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`MAR in [mi ${controlWord.mi}]`} waveform={waves['mi']} signal={controlWord.mi} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`RAM out [co ${controlWord.ro}]`} waveform={waves['ro']} signal={controlWord.ro} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Instruction in [ii ${controlWord.ii}]`} waveform={waves['ii']} signal={controlWord.ii} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Counter enable [ce ${controlWord.ce}]`} waveform={waves['ce']} signal={controlWord.ce} />
        {/* end fetch */}

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Instruction out [io ${controlWord.io}]`} waveform={waves['io']} signal={controlWord.io} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Subtract [su ${controlWord.su}]`} waveform={waves['su']} signal={controlWord.su} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`A register in [ai ${controlWord.ai}]`} waveform={waves['ai']} signal={controlWord.ai} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`B register in [bi ${controlWord.bi}]`} waveform={waves['bi']} signal={controlWord.bi} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`ALU out [eo ${controlWord.eo}]`} waveform={waves['eo']} signal={controlWord.eo} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`A register out [ao ${controlWord.ao}]`} waveform={waves['ao']} signal={controlWord.ao} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Output register in [oi ${controlWord.oi}]`} waveform={waves['oi']} signal={controlWord.oi} />

        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`RAM in [ri ${controlWord.ri}]`} waveform={waves['ri']} signal={controlWord.ri} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Jump [j ${controlWord.j}]`} waveform={waves['j']} signal={controlWord.j} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Jump conditional [jc ${controlWord.jc}]`} waveform={waves['jc']} signal={controlWord.jc} />
        <Canvas width={width} height={height} className="canvas" clk={clk}
          name={`Halt [hlt ${controlWord.hlt}]`} waveform={waves['hlt']} signal={controlWord.hlt} />

      </div>
    </div>
  );
}

export default Visual;
