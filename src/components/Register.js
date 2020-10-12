import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
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
    if (this.props.oe !== prevProps.oe) {
      // Output enable
      if (this.props.oe) {
        this.props.bus(this.state.value);
      }
    }

    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      if (this.props.load) {
        // Load from the bus.
        this.setState({ value: this.props.in });
        // Set the external state for the ALU
        this.props.update(this.props.in);
      }
    }
  }

  render() {
    let className = 'busDisconnected';
    if (this.props.oe) {
      className = 'busOut';
    }
    return (
      <div>
        <h2 className={className}>{this.props.name}: {this.state.value}</h2>
      </div>
    );
  }
}

export default Register;
