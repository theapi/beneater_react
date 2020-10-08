import React from 'react';

class ProgramCounter extends React.Component {

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      if (this.props.pc.inc) {
        // Increment.
        this.props.set(this.props.pc.value + 1);
      } else if (this.props.pc.load) {
        // Load from the bus.
        this.props.set(this.props.bus);
      }
    }
  }

  render() {
    return (
      <div>
        <h2>ProgramCounter is {this.props.pc.value}</h2>
      </div>
    );
  }
}

export default ProgramCounter;
