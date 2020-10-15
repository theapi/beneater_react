import React from 'react';

import Led from '../Led';
import '../../css/clock.css';

import { connect } from 'react-redux';
import { tick } from '../../features/clock/clockSlice';

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
    this.props.tick(clk);
    // // Output the clock to the rest of the system.
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
      <div id="clock" className="module">
        <div className="name">Clock: </div>
        <Led
          clk={this.state.value}
        />
      </div>
    );
  }
}
// WOW! to messy with classes.
const mapDispatchToProps = (dispatch) => {
  return {
      tick: () => dispatch(tick())
  }
};
export default connect(null, mapDispatchToProps)(Clock);

// export default Clock;
