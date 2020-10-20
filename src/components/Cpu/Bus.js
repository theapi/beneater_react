import React from 'react';
import { useSelector } from 'react-redux';
import { selectBus } from '../../features/bus/busSlice';

import '../../css/bus.css';

const Bus = () => {
  const bus = useSelector(selectBus);
  return (
    <div id="bus" className="module">
      <div className="name">Bus: </div>
      <div className="value">
        {/* 0x{bus.toString(16).toUpperCase()} */}
         ({bus})
      </div>
    </div>
  );
}

export default Bus;
