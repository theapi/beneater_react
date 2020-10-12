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

    // Set the value to memory address 0;
    this.state = {
      value: this.memory[0],
    }
  }

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(addr)
    if (this.props.readAddress !== prevProps.readAddress) {
      console.log(`readAddress: ${this.props.readAddress}`);
      console.log(`ramValue: ${this.memory[this.props.readAddress]}`);
      this.setState({ value: this.memory[this.props.readAddress] });
    }

    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      // RAM out.
      if (this.props.ro) {
        this.props.bus(this.state.value);
      }
    }
  }

  render() {
    let className = 'busDisconnected';
    if (this.props.ro) {
      className = 'busOut';
    }
    return (
      <div>
        <h2 className={className}>Ram value at {this.props.readAddress} is
        : {this.state.value.toString(16).toUpperCase()}</h2>
      </div>
    );
  }
}

export default Ram;
