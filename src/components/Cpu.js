import React from 'react';

import Clock from './Cpu/Clock';
import Bus from './Cpu/Bus';
import ProgramCounter from './Cpu/ProgramCounter';
import MicroCodeCounter from './Cpu/MicroCodeCounter';
import Ram from './Cpu/Ram';
import RegisterA from './Cpu/RegisterA'
import Register from './Cpu/Register'
import Alu from './Cpu/Alu'
import Controller from './Cpu/Controller';

import '../css/cpu.css';

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
          update={(val) => this.updateState('clk', val)}
        />

        <Bus bus={this.state.bus} />

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
          update={(val) => this.updateState('uCount', val)}
        />

        <Register
          name="Memory Address Register"
          update={(val) => this.updateState('regMar', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.mi}
          in={this.state.bus}
          oe={false} // No output enable for the MAR.
          bus={() => {}} // MAR does not output to the bus, so ignore it.
        />
        <Ram
          clk={this.state.clk}
          readAddress={this.state.regMar}
          ro={this.state.controlWord.ro} // Output enable
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="Instruction Register"
          update={(val) => this.updateState('regInstruction', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.ii}
          in={this.state.bus}
          oe={this.state.controlWord.io}
          bus={(val) => this.setBus(val & 0xF)} // Only lower 4 bits to the bus
        />
        <Controller
          counter={this.state.uCount}
          in={this.state.regInstruction}
          update={(val) => this.updateState('controlWord', val)}
        />

        <RegisterA
          //load={this.state.controlWord.ai}
          load={1}
          oe={this.state.controlWord.ao}
        />
        <Register
          name="A Register"
          update={(val) => this.updateState('regA', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.ai}
          in={this.state.bus}
          oe={this.state.controlWord.ao}
          bus={(val) => this.setBus(val)}
        />
        <Register
          name="B Register"
          update={(val) => this.updateState('regB', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.bi}
          in={this.state.bus}
          oe={false}
          bus={(val) => this.setBus(val)}
        />
        <Alu
          regA={this.state.regA}
          regB={this.state.regB}
          eo={this.state.controlWord.eo}
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="Output"
          update={(val) => this.updateState('regOut', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={this.state.controlWord.oi}
          in={this.state.bus}
          oe={false}
          bus={() => {}}
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

export default Cpu;
