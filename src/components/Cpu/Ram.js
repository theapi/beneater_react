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
    if (this.props.ro !== prevProps.ro) {
      // RAM out.
      if (this.props.ro && Number.isInteger(this.props.readAddress)) {
        const value = this.memory[this.props.readAddress];
        this.setState({ value });
        this.props.out(value);
      }
    }
  }

  render() {
    let className = 'busDisconnected';
    if (this.props.ro) {
      className = 'busOut';
    }
    return (
      <div id="ram" className={`module ${className}`}>
        <div className="name">RAM: </div>
        <div className="value">
          0x{this.state.value.toString(16).toUpperCase()} ({this.state.value})
        </div>
      </div>
    );
  }
}

export default Ram;
