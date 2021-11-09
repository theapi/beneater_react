import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectPC,
} from '../features/controller/programCounterSlice';
import { program } from '../features/ram/program';

import '../css/program.css';

const Program = () => {
  const prog = program();
  const index = useSelector(selectPC);

  return (
    <div id="program">
      <div className="name">Program: </div>
      <div className="value">{prog[index].toString(16).toUpperCase()}</div>
    </div>
  );
};

export default Program;
