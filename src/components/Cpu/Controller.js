import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectRomValue,
  buildControlWord,
  selectControlAddr,
} from '../../features/controller/controllerSlice';

const Controller = ({ counter, instruction}) => {
  const dispatch = useDispatch();
  const romValue = useSelector(selectRomValue);
  const addr = useSelector(selectControlAddr);

  useEffect(() => {
    dispatch(buildControlWord({
      ucount: counter,
      regInstruction: instruction,
    }));
  }, [counter, instruction, dispatch]);

  return (
    <div id="controller" className="module">
      <div className="name">Control word: </div>
      <div className="value">
        {romValue.toString(16).toUpperCase()} (addr: {addr})
      </div>
    </div>
  );
};

export default Controller;
