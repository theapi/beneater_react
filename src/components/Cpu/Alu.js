import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAlu,
  calculate
} from '../../features/alu/aluSlice';


const Alu = ({ regA, regB, sub, eo, out}) => {
  const dispatch = useDispatch();
  const value = useSelector(selectAlu);

  useEffect(() => {
    dispatch(calculate({
      regA,
      regB,
      sub,
    }));
  }, [regA, regB, sub, dispatch]);

  useEffect(() => {
    if (eo) {
      out(value);
    }
  }, [eo, value, out]);

  let className = 'busDisconnected';
  if (eo) {
    className = 'busOut';
  }
  return (
    <div id="alu" className={`module ${className}`}>
      <div className="name">Sum: </div>
      <div className="value">{value}</div>
    </div>
  );
};

/*
class Alu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

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
*/

export default Alu;
