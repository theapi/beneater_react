import React from 'react';
import '../../css/bus.css';

class Bus extends React.Component {
  render() {
    return (
      <div id="bus" className="module">
        <div className="name">Bus: </div>
        <div className="value">
          0x{this.props.bus.toString(16).toUpperCase()} ({this.props.bus})
        </div>
      </div>
    );
  }
}

export default Bus;
