import React from 'react';

import Clock from './Clock';
import Led from './Led';
import ProgramCounter from './ProgramCounter';
import Ram from './Ram';

class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clk: false,       // Cpu clock
      uc: 0,            // Micro code counter
      bus: 0,           // The main bus
      a_reg: 0,         // A register (accumulator)
      b_reg: 0,         // B register
      out_reg: 0,       // Output register, what is shown on the output display
      instruction: 0,   // Instruction register
      ctl_word: 0,      // The control word
      pc: {             // Program counter
        inc: true,        // Increment the counter
        load: false,      // Set the counter to value on the bus
        value: 0,         // The value of the counter
      },
      ram: {            // Holds the program to run
        we: false,        // Write a new value at the address
        addr: 0,          // Memory address register
        value: 0,         // The value at addr
      }
    };
  }

  render() {
    return (
      <div className="Cpu">
        <Clock clk={this.state.clk} onTick={() => this.handleClockTick()}/>
        <Led clk={this.state.clk}/>
        <ProgramCounter
          clk={this.state.clk}
          pc={this.state.pc}
          set={(state) => this.updateState('pc', state)}
        />
        <Ram
          pc={this.state.pc}
          ram={this.state.ram}
          set={(state) => this.updateState('ram', state)}
        />
      </div>
    );
  }

  handleClockTick() {
    this.setState(state => ({
      clk: !state.clk
    }));
  }

  setBus(value) {
    this.setState({ bus: value });
  }

  updateState(key, state) {
    this.setState({ [key]: state });
  }
}

export default Cpu;
