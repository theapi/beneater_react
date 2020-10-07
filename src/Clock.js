import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {level: 1};
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
    this.setState(state => ({
      level: !state.level
    }));
  }

  render() {
    const level = this.state.level;
    let msg;
    if (level) {
      msg = 'HIGH';
    } else {
      msg = 'LOW';
    }
    return (
      <div>
        <h2>Clock is {msg}.</h2>
      </div>
    );
  }
}

export default Clock;
