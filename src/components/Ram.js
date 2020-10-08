import React from 'react';

class Ram extends React.Component {
  constructor(props) {
    super(props);
    // Hard coded for now
    // The program for 28 + 14 :-)
    this.memory = [
      0x1E,
      0x2F,
      0xE0,
      0xF0,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x00,
      0x1C,
      0x0E,
    ];
  }

  /**
   * Do the work here as render shouldn't effect state.
   * Happens AFTER render() though.
   */
  componentDidUpdate(prevProps) {
    // always @(addr)
    if (this.props.ram.addr !== prevProps.ram.addr) {
      const ram = { ...this.props.ram };
      ram.value = this.memory[this.props.ram.addr];
      this.props.set(ram);
    }
  }

  render() {
    return (
      <div>
        <h2>Ram value at {this.props.ram.addr} is
        : {this.memory[this.props.ram.addr].toString(16).toUpperCase()}</h2>
      </div>
    );
  }
}

export default Ram;
