import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPC,
  reset as pcReset,
  load as pcLoad,
  increment,
} from '../../features/controller/programCounterSlice';

const ProgramCounter = ({ reset, clk, inc, load, input, co, out }) => {
  const dispatch = useDispatch();
  const value = useSelector(selectPC);

  // Reset
  useEffect(() => {
    dispatch(pcReset(reset));
  }, [reset, dispatch]);

  // Output enable
  useEffect(() => {
    if (co) {
      out(value);
    }
  }, [co, out, value]);

  // Increment
  useEffect(() => {
    // @posedge
    if (inc && clk) {
      dispatch(increment());
    }
  }, [inc, clk, dispatch]);

  // Load
  useEffect(() => {
    if (load && clk) {
      // @posedge Load from the bus on the posedge of the clock.
      dispatch(pcLoad(input));
    }
  }, [load, clk, input, dispatch]);

  let className = 'busDisconnected';
  if (co) {
    className = 'busOut';
  }
  return (
    <div id="pc" className={`module ${className}`}>
      <div className="name">ProgramCounter: </div>
      <div className="value">{value}</div>
    </div>
  );
};

/*
class ProgramCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  componentDidUpdate(prevProps) {
    // always @(posedge reset)
    if (this.props.reset === true) {
      if (this.props.reset !== prevProps.reset) {
        this.setState({ value: 0 });
      }

      // Ignore the clock while held in reset.
      return;
    }

    // always @(oe)
    if (this.props.co !== prevProps.co) {
      // Output enable
      if (this.props.co) {
        this.props.bus(this.state.value);
      }
    }

    // always @(posedge clk)
    if (this.props.clk !== prevProps.clk && this.props.clk === true) {
      let value = this.state.value;
      if (this.props.inc) {
        // Increment, but only 16 x 16 memory!
        value++;
        if (value > 15) {
          value = 0;
        }
        this.setState({ value });
      } else if (this.props.load) {
        // Load from the input.
        value = this.props.in;
        this.setState({ value });
      }
    }
  }

  render() {
    let className = 'busDisconnected';
    if (this.props.co) {
      className = 'busOut';
    }
    return (
      <div id="pc" className={`module ${className}`}>
        <div className="name">ProgramCounter: </div>
        <div className="value">{this.state.value}</div>
      </div>
    );
  }
}
*/

export default ProgramCounter;
