import React from 'react';
import { useSelector } from 'react-redux';

import Led from './Led';

import { selectClock } from '../features/clock/clockSlice';

import '../css/visual.css';

const Visual = () => {
  const clk = useSelector(selectClock);
  return (
    <div id="visual">

      <h6>A visual representation of what's happening inside the cpu goes here</h6>

      <Led on={clk}  />

    </div>
  );
}

export default Visual;
