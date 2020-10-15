
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Led from '../Led';
import { tick, selectClock } from '../../features/clock/clockSlice';

import '../../css/clock.css';

const Clock = ({halt}) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const clk = useSelector(selectClock);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (halt) {
      isActive = false;
    }

    if (isActive) {
      interval = setInterval(() => {
        dispatch(tick(!clk));
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, clk, halt, dispatch]);

  return (
    <div>
      <div>
        <button
        className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>

      <div id="clock" className="module">
        <div className="name">Clock: </div>
        <Led on={clk} />
      </div>
    </div>
  );
};

export default Clock;
