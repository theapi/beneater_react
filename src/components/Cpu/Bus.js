import React from 'react';
import '../../css/bus.css';

class Bus extends React.Component {
  render() {
    return (
      <div id="bus" className="module">
        <span className="name">Bus: </span>
        <span className="value">
          0x{this.props.bus.toString(16).toUpperCase()} ({this.props.bus})
        </span>
      </div>
    );
  }
}

export default Bus;
