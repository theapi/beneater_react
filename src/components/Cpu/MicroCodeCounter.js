import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  reset as countReset,
  increment,
  selectUCount
} from '../../features/controller/ucounterSlice';

const MicroCodeCounter = ({ reset, clk }) => {
  const dispatch = useDispatch();
  const value = useSelector(selectUCount);

  // Reset
  useEffect(() => {
    if (reset === true) {
      dispatch(countReset());
    }
  }, [reset, dispatch]);

  // Clock tick
  useEffect(() => {
    if (clk) {
      dispatch(increment());
    }
  }, [clk, dispatch]);

  return (
    <div id="microcode" className="module">
      <div className="name">Micro code counter: </div>
      <div className="value">{value}</div>
    </div>
  );
};

export default MicroCodeCounter;
