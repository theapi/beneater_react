import React from 'react';

class MicroCodeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
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

    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      let value = this.state.value;
      // Increment, but only up to 4.
      if (value < 4) {
        value++;
      } else {
        value = 0;
      }

      this.setState({ value });
      this.props.update(value);
    }
  }

  render() {
    return (
      <div id="microcode" className="module">
        <span className="name">Micro code counter: </span>
        <span className="value">{this.state.value}</span>
      </div>
    );
  }
}

export default MicroCodeCounter;
