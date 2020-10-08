import React from 'react';

class ProgramCounter extends React.Component {

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      const pc = { ...this.props.pc };

      if (pc.inc) {
        // Increment.
        pc.value++;
        //pc.inc = false; TMP commented out
        this.props.set(pc);
      } else if (pc.load) {
        // Load from the bus.
        pc.value = this.props.bus;
        pc.load = false;
        this.props.set(pc);
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
