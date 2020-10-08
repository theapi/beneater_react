import React from 'react';

class Led extends React.Component {
  componentDidUpdate(prevProps) {
    // Called after render() BUT only once,
    // even in  <React.StrictMode>
    if (this.props.clk !== prevProps.clk) {
      console.log(`componentDidUpdate: ${this.props.clk}`);
    }
  }

  render() {
    console.log(this.props.clk);
    return (
      <div>
        <h2>LED is {this.props.clk ? 'ON' : 'OFF'}</h2>
      </div>
    );
  }
}

export default Led;
