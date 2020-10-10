import React from 'react';

class Led extends React.Component {
  render() {
    return (
      <div>
        <h2>LED: {this.props.clk ? 'ON' : 'OFF'}</h2>
      </div>
    );
  }
}

export default Led;
