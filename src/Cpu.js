import React from 'react';

import Clock from './Clock';
import Led from './Led';

class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clk: false,       // Cpu clock
      pc: 0,            // Program counter
      uc: 0,            // Micro code counter
      bus: 0,           // The main bus
      a_reg: 0,         // A register (accumulator)
      b_reg: 0,         // B register
      out_reg: 0,       // Output register, what is shown on the output display
      mar: 0,           // Memory address register
      instruction: 0,   // Instruction register
      ctl_word: 0,      // The control word
    };
  }

  render() {
    return (
      <div className="Cpu">
        <Clock clk={this.state.clk} onTick={() => this.handleClockTick()}/>
        <Led clk={this.state.clk}/>
      </div>
    );
  }

  handleClockTick() {
    this.setState(state => ({
      clk: !state.clk
    }));
  }
}

export default Cpu;
