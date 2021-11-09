import React from 'react';

import ControlWord from './ControlWord';
import Cpu from './Cpu/Cpu';
import Visual from './Visual';

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

      </div>
    );
  }

}

export default App;
