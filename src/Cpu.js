import React from 'react';

import Clock from './Clock';
import Led from './Led';

class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clk: 0,
    };
  }

  render() {
    return (
      <div className="Cpu">
        <Clock clk={this.state.clk} onTick={() => this.handleClockTick()}/>
        <Led clk={this.state.clk}/>
      </div>
    );
  }

  handleClockTick() {
    this.setState(state => ({
      clk: !state.clk
    }));
  }
}

export default Cpu;
