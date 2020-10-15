
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegA, reset, load } from '../../features/register/regASlice';
import { selectClock } from '../../features/clock/clockSlice';
import { selectBus, setBus, } from '../../features/bus/busSlice';

const RegisterA = (props) => {
  const dispatch = useDispatch();
  const value = useSelector(selectRegA);
  const clk = useSelector(selectClock);
  const bus = useSelector(selectBus);

  useEffect(() => {
    if (props.reset === true) {
      dispatch(reset());
    }
  }, [props.reset, dispatch]);

  useEffect(() => {
    if (props.oe) {
      dispatch(setBus(value));
    }
  }, [props.oe, value, dispatch]);

  useEffect(() => {
    if (props.load && clk) {
      // Load from the bus on the posedge of the clock.
      dispatch(load({key: 'foo', value: bus}));
    }
  }, [props.load, clk, bus, dispatch]);

  let className = 'busDisconnected';
  if (props.oe) {
    className = 'busOut';
  }
  return (
    <div className={`module reg ${className}`}>
      <div className="name">A Register: </div>
      <div className="value">
        0x{value.toString(16).toUpperCase()} ({value})
      </div>
    </div>
  );
};

export default RegisterA;
