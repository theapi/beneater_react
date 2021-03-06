import React from 'react';
import '../css/led.css';

class Led extends React.Component {
  render() {
    let className = 'off';
    if (this.props.on) {
      className = 'on';
    }
    return (
      <div className={`led ${className}`}></div>
    );
  }
}

export default Led;
