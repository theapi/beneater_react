import React from 'react';

import ControlWord from './ControlWord';
import Cpu from './Cpu/Cpu';
import Visual from './Visual';
import Program from './Program';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="app">

        <Cpu />
        <Visual />
        <ControlWord />
        <Program />

      </div>
    );
  }

}

export default App;
