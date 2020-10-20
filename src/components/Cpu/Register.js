
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRegisters,
  reset as regReset,
  load as regLoad
} from '../../features/register/registerSlice';

const Register = ({reset, clk, input, id, name, oe, load, out}) => {
  const dispatch = useDispatch();

  // Have to get all the register values
  const values = useSelector(selectRegisters);
  const value = values[id] ? values[id] : 0;

  const inputRef = useRef(input);

  useEffect(() => {
    if (reset === true) {
      dispatch(regReset());
    }
  }, [reset, dispatch]);

  useEffect(() => {
    if (oe) {
      out(value);
    }
  }, [oe, value, out]);

  // always @input
  // change the current input value whenever it changes.
  useEffect(() => {
    if (input) {
      inputRef.current = input;
    }
  }, [input]);

  useEffect(() => {
    if (load && clk) {
      // console.log(`REG LOAD: ${inputRef.current}`);
      dispatch(regLoad({key: id, value: inputRef.current}));
    }
  // If the input is a dependency the load
  // is always happening when input changes rather than just once.
  }, [load, clk, id, dispatch]);

  let className = 'busDisconnected';
  if (oe) {
    className = 'busOut';
  }
  return (
    <div className={`module reg ${className}`}>
      <div className="name">{name}: </div>
      <div className="value">
        0x{value.toString(16).toUpperCase()} ({value})
      </div>
    </div>
  );
};

export default Register;
