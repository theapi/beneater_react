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

  render() {
    return (
      <div>
        <h2>Clock: {this.state.clk ? 'HIGH' : 'LOW'}</h2>
      </div>
    );
  }
}

export default Clock;
