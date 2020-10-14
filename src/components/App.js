import React from 'react';

import Cpu from './Cpu';
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

      </div>
    );
  }

}

export default App;
