import React from 'react';

class Clock extends React.Component {

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
    this.props.onTick();
  }

  render() {
    return (
      <div>
        <h2>Clock is {this.props.clk ? 'HIGH' : 'LOW'}</h2>
      </div>
    );
  }
}

export default Clock;
