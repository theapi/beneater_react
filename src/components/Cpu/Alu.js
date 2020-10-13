import React from 'react';

class Alu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  /**
   * Do the work here as render shouldn't effect state.
   */
  componentDidUpdate(prevProps) {
    // always @(regA or regB)
    if (this.props.regA !== prevProps.regA || this.props.regB !== prevProps.regB) {
      // Perfom calculation
      // @todo subtraction
      this.setState({ value: this.props.regA + this.props.regB });
    }

    // always @(eo)
    if (this.props.eo !== prevProps.eo) {
      // Output enable
      if (this.props.eo) {
        this.props.bus(this.state.value);
      }
    }
  }

  render() {
    let className = 'busDisconnected';
    if (this.props.eo) {
      className = 'busOut';
    }
    return (
      <div id="alu" className={`module ${className}`}>
        <div className="name">Sum: </div>
        <div className="value">{this.state.value}</div>
      </div>
    );
  }
}

export default Alu;
