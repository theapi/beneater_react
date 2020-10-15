
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRegister,
  reset as regReset,
  load as regLoad
} from '../../features/register/registerSlice';
import { selectClock } from '../../features/clock/clockSlice';
import { selectBus, setBus, } from '../../features/bus/busSlice';

const Register = ({reset, id, name, oe, load}) => {
  const dispatch = useDispatch();       // @todo pass in out as a function to props
  const clk = useSelector(selectClock); // @todo pass clk in as a prop
  const bus = useSelector(selectBus);   // @todo pass bus in as a prop

  // Have to get all the register values
  const values = useSelector(selectRegister);
  const value = values[id] ? values[id] : 0;

  useEffect(() => {
    if (reset === true) {
      dispatch(regReset());
    }
  }, [reset, dispatch]);

  useEffect(() => {
    if (oe) {
      // @todo the cpu should do the setBus dispatch,
      // this should be props.out(value) when CPU has bus dispatcher
      dispatch(setBus(value));
    }
  }, [oe, value, dispatch]);

  useEffect(() => {
    if (load && clk) {
      // Load from the bus on the posedge of the clock.
      dispatch(regLoad({key: id, value: bus}));
    }
  }, [load, name, clk, bus, dispatch]);

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
