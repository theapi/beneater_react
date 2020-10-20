import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectControlWord,
} from '../../features/controller/controllerSlice';

const Controller = () => {
  const cw = useSelector(selectControlWord);

  return (
    <div id="controller" className="module">
      <div className="name">Control word: </div>
      <div className="value">
        {JSON.stringify(cw)}
      </div>
    </div>
  );
};

export default Controller;
