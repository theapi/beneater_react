import React from 'react';

class Bus extends React.Component {
  render() {
    return (
      <div>
        <h2>Bus: {this.props.bus.toString(16).toUpperCase()}</h2>
      </div>
    );
  }
}

export default Bus;
