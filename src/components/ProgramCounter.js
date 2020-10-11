import React from 'react';

class ProgramCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      busClass: 'busDisconnected',
    }
  }

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(posedge reset)
    if (this.props.reset === true) {
      if (this.props.reset !== prevProps.reset) {
        this.setState({ value: 0 });
      }

      // Ignore the clock while held in reset.
      return;
    }

    // always @(oe)
    if (this.props.co !== prevProps.co) {
      // Output enable
      if (this.props.co) {
        this.props.bus(this.state.value);
      }

      // Styling
      if (this.props.co) {
        this.setState({ busClass: 'busOut' });
      } else {
        this.setState({ busClass: 'busDisconnected' });
      }
    }

    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      let value = this.state.value;
      if (this.props.inc) {
        // Increment, but only 16 x 16 memory!
        if (value < 15) {
          value++;
        } else {
          value = 0;
        }
        this.setState({ value });
      } else if (this.props.load) {
        // Load from the input.
        value = this.props.in;
        this.setState({ value });
      }
    }
  }

  render() {
    return (
      <div>
        <h2 className={this.state.busClass}>ProgramCounter: {this.state.value}</h2>
      </div>
    );
  }
}

export default ProgramCounter;
