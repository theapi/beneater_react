import React from 'react';
import { rom } from './isa_rom';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    }

    // Instruction set ROM.
    this.memory = rom();
  }

  bitRead(value, bit) {
    return (value >> bit) & 0x01;
  }

  /**
   * Extract the rom value to a json object of the control word.
   * @param {integer} value
   */
  decode(value) {
    return {
      hlt: this.bitRead(value,15), // Halt
      mi: this.bitRead(value, 14), // MAR in
      ri: this.bitRead(value, 13), // RAM in
      ro: this.bitRead(value, 12), // RAM out
      io: this.bitRead(value, 11), // Instruction out
      ii: this.bitRead(value, 10), // Instruction in
      ai: this.bitRead(value, 9),  // A register in
      ao: this.bitRead(value, 8),  // A register out
      eo: this.bitRead(value, 7),  // ALU out
      su: this.bitRead(value, 6),  // Subtract
      bi: this.bitRead(value, 5),  // B register in
      oi: this.bitRead(value, 4),  // Output register in
      ce: this.bitRead(value, 3),  // Counter enable
      co: this.bitRead(value, 2),  // Counter out
      j:  this.bitRead(value, 1),  // Jump
      jc: this.bitRead(value, 0),  // Jump conditional
    };
  }

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(counter)
    if (this.props.counter !== prevProps.counter) {
      // The instruction is the higher nibble of what comes from the Ram.
      // The lower nibble byte of Ram is the operand.
      // So mask off the lower nibble.
      const instruction = this.props.in & 0xF0;
      const readAddress = instruction | this.props.counter;
      this.setState({ value: this.memory[readAddress] });

      // Set the decoded control word for the rest of the cpu.
      this.props.update(this.decode(this.memory[readAddress]));
      // Console log for the history of the instructions.
      console.log(this.decode(this.memory[readAddress]));
    }
  }

  render() {
    return (
      <div className="module controller">
        <span className="name">Control word: </span>
        <span className="value">
          {this.state.value.toString(16).toUpperCase()}
        </span>
      </div>
    );
  }
}

export default Controller;
