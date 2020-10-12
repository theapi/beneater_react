import React from 'react';

import Clock from './Clock';
import Led from './Led';
import Bus from './Bus';
import ProgramCounter from './ProgramCounter';
import MicroCodeCounter from './MicroCodeCounter';
import Ram from './Ram';
import Register from './Register'
import Alu from './Alu'
import Controller from './Controller';

class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false,     // Reset to start values
      clk: false,       // Cpu clock
      uCount: -1,    // Microcode counter
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
      <div className="Cpu">
        <Clock
          update={(val) => this.updateState('clk', val)}
        />
        <Led clk={this.state.clk}/>
        <Bus bus={this.state.bus}/>

        <ProgramCounter
          clk={this.state.clk}
          reset={this.state.reset}
          inc={false} // @todo control from program
          load={false} // @todo control from program
          in={this.state.bus}
          co={false} // Counter out @todo control from program
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="Memory Address Register"
          update={(val) => this.updateState('regMar', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={false} // @todo control from program
          in={this.state.bus}
          oe={false} // Output enable @todo control from program
          bus={() => {}} // MAR does not output to the bus, so ignore it.
        />
        <Ram
          clk={this.state.clk}
          readAddress={this.state.bus} // @todo control from program
          ro={false} // Output enable @todo control from program
          bus={(val) => this.setBus(val)}
        />
        <MicroCodeCounter
          clk={this.state.clk}
          reset={this.state.reset}
          update={(val) => this.updateState('uCount', val)}
        />
        <Controller
          counter={this.state.uCount}
          in={this.state.bus}
          update={(val) => this.updateState('controlWord', val)}
        />
        <Register
          name="Instruction Register"
          update={(val) => this.updateState('regInstruction', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={false} // @todo control from program
          in={this.state.bus}
          oe={false} // Output enable @todo control from program
          bus={(val) => this.setBus(val)}
        />

        <Register
          name="A Register"
          update={(val) => this.updateState('regA', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={false} // @todo control from program
          in={this.state.bus}
          oe={false} // Output enable @todo control from program
          bus={(val) => this.setBus(val)}
        />
        <Register
          name="B Register"
          update={(val) => this.updateState('regB', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={false} // @todo control from program
          in={this.state.bus}
          oe={false} // Output enable @todo control from program
          bus={(val) => this.setBus(val)}
        />
        <Alu
          regA={this.state.regA}
          regB={this.state.regB}
          eo={false} // Output enable @todo control from program
          bus={(val) => this.setBus(val)}
        />
        <Register
          name="Output Register"
          update={(val) => this.updateState('regOut', val)}
          clk={this.state.clk}
          reset={this.state.reset}
          load={false} // @todo control from program
          in={this.state.bus}
          oe={false} // Output enable @todo control from program
          bus={() => {}} // Does not output to the bus, so ignore it.
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
