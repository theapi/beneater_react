
import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (load && clk) {
      // Load from the bus on the posedge of the clock.
      dispatch(regLoad({key: id, value: input}));
    }
  }, [load, id, clk, input, dispatch]);

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
