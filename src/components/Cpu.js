import React from 'react';

import Clock from './Clock';
import Led from './Led';
import Bus from './Bus';
import ProgramCounter from './ProgramCounter';
import Ram from './Ram';

class Cpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clk: false,       // Cpu clock
      reset: false,     // Reset to start values
      bus: 0,           // The main bus
    };
  }

  render() {
    return (
      <div className="Cpu">
        <Clock out={(state) => this.updateState('clk', state)} />
        <Led clk={this.state.clk}/>
        <Bus bus={this.state.bus}/>
        <ProgramCounter
          clk={this.state.clk}
          reset={this.state.reset}
          inc={true} // @todo control from program
          load={false} // @todo control from program
          in={this.state.bus}
          co={true} // Counter out @todo control from program
          out={(val) => this.setBus(val)}
        />
        <Ram
          clk={this.state.clk}
          readAddress={this.state.bus} // @todo control from program
          ro={false} // RAM out @todo control from program
          out={(val) => this.setBus(val)}
        />
      </div>
    );
  }

  setBus(value) {
    this.setState({ bus: value });
  }

  updateState(key, state) {
    this.setState({ [key]: state });
  }
}

export default Cpu;
