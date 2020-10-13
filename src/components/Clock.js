import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clk: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const clk = !this.state.clk;
    this.setState({ clk });

    // Output the clock to the rest of the system.
    this.props.update(clk);
  }

  componentDidUpdate(prevProps) {
    // always @(halt)
    if (this.props.halt) {
      // Stop the clock
      this.componentWillUnmount();
    }
  }

  render() {
    return (
      <div className="module clock">
        <span className="name">Clock: </span>
        <span className="value">{this.state.clk ? 'HIGH' : 'LOW'}</span>
      </div>
    );
  }
}

export default Clock;
