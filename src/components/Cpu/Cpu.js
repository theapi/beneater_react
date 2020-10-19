import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Clock from './Clock';
import MicroCodeCounter from './MicroCodeCounter';
import Bus from './Bus';
import ProgramCounter from './ProgramCounter';
import Ram from './Ram';
import Register from './Register'
// import Alu from './Alu'
import Controller from './Controller';

import { selectReset } from '../../features/cpu/cpuSlice';
import { selectClock } from '../../features/clock/clockSlice';
import { selectUCount } from '../../features/controller/ucounterSlice';
import { selectRegisters } from '../../features/register/registerSlice';
import { selectControlWord } from '../../features//controller/controllerSlice';
import {
  selectBus,
  setBus,
} from '../../features/bus/busSlice';

import '../../css/cpu.css';

const Cpu = () => {
  const dispatch = useDispatch();

  const reset = useSelector(selectReset);
  const clk = useSelector(selectClock);
  const ucount = useSelector(selectUCount);
  const bus = useSelector(selectBus);
  const registers = useSelector(selectRegisters);
  const controlWord = useSelector(selectControlWord);

  return (
    <div id="cpu">

      <Clock halt={controlWord.hlt} />
      <MicroCodeCounter
        clk={clk}
        reset={reset}
      />
      <Bus />

      <ProgramCounter
        clk={clk}
        reset={reset}
        inc={controlWord.ce}
        load={controlWord.j}
        input={bus}
        co={controlWord.co}
        out={(val) => dispatch(setBus(val))}
      />

      <Register
        name="Memory Address Register"
        id="regMar"
        clk={clk}
        reset={reset}
        load={controlWord.mi}
        input={bus}
        oe={false} // No output enable for the MAR.
      />
      <Ram
        clk={clk}
        readAddress={registers['regMar']}
        ro={controlWord.ro}
        out={(val) => dispatch(setBus(val))}
      />
      <Register
        name="Instruction Register"
        id="regInstruction"
        clk={clk}
        reset={reset}
        load={controlWord.ii}
        input={bus}
        oe={controlWord.io}
        out={(val) => dispatch(setBus(val & 0xF))} // Only lower 4 bits to the bus
      />
      <Controller
        counter={ucount}
        intruction={registers['regInstruction']}
      />

      <Register
        name="A Register"
        id="regA"
        clk={clk}
        reset={reset}
        load={controlWord.ai}
        input={bus}
        oe={controlWord.ao}
        out={(val) => dispatch(setBus(val))}
      />
      <Register
        name="B Register"
        id="regB"
        clk={clk}
        reset={reset}
        load={controlWord.bi}
        input={bus}
        oe={false}
      />

      {/* alu
      here */}

      <Register
        name="Output"
        id="regOut"
        clk={clk}
        reset={reset}
        load={controlWord.oi}
        input={bus}
        oe={false}
      />

    </div>
  );
};

/*
class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false,     // Reset to start values
      clk: false,       // Cpu clock
      uCount: false,    // Microcode counter
      bus: 0,           // The main bus
      regA: 0,
      regB: 0,
      regInstruction: 0,
      regMar: 0,
      controlWord: {},
    };
  }

  render() {
    return (
      <div id="cpu">

        <Clock
          halt={this.state.controlWord.hlt}
        />

        <Bus />

        <ProgramCounter
          clk={this.state.clk}
          reset={this.state.reset}
          inc={this.state.controlWord.ce}
          load={this.state.controlWord.j}
          in={this.state.bus}
          co={this.state.controlWord.co}
          bus={(val) => this.setBus(val)}
        />
        <MicroCodeCounter
          clk={this.state.clk}
          reset={this.state.reset}
        />

        <Register
          name="Memory Address Register"
          id="regMar"
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.mi}
          in={this.state.bus}
          oe={false} // No output enable for the MAR.
        />
        <Ram
          clk={this.state.clk}
          readAddress={this.state.regMar}
          ro={this.state.controlWord.ro} // Output enable
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="Instruction Register"
          id="regInstruction"
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.ii}
          in={this.state.bus}
          oe={this.state.controlWord.io}
          out={(val) => this.setBus(val & 0xF)} // Only lower 4 bits to the bus
        />
        <Controller
          counter={this.state.uCount}
          in={this.state.regInstruction}
          update={(val) => this.updateState('controlWord', val)}
        />

        <Register
          name="A Register"
          id="regA"
          clk={this.state.clk}
          reset={this.state.reset}
          load={1} // {this.state.controlWord.ai}
          in={this.state.bus}
          oe={this.state.controlWord.ao}
          out={(val) => this.setBus(val)}
        />
        <Register
          name="B Register"
          id="regB"
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.bi}
          in={this.state.bus}
          oe={false}
        />
        <Alu
          regA={this.state.regA}
          regB={this.state.regB}
          eo={this.state.controlWord.eo}
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="Output"
          id="regOut"
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.oi}
          in={this.state.bus}
          oe={false}
        />

      </div>
    );
  }

  setBus(value) {
    this.setState({ bus: value });
  }

  updateState(key, state) {
    this.setState({ [key]: state });
  }

}
*/

export default Cpu;
