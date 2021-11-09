import { combineReducers } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectControlWord,
} from '../features/controller/controllerSlice';

import '../css/controlword.css';

const ControlWord = () => {
  const cw = useSelector(selectControlWord);

  const words = [];
  if (cw.hlt) {
    words.push('Halt');
  }
  if (cw.mi) {
    words.push('Memory address register in');
  }
  if (cw.ri) {
    words.push('Random access memory in');
  }
  if (cw.ro) {
    words.push('Random access memory out');
  }
  if (cw.io) {
    words.push('Instruction in');
  }
  if (cw.ii) {
    words.push('Instruction out');
  }
  if (cw.ai) {
    words.push('A register in');
  }
  if (cw.ao) {
    words.push('A register out');
  }
  if (cw.eo) {
    words.push('ALU out');
  }
  if (cw.su) {
    words.push('Subtract');
  }
  if (cw.bi) {
    words.push('B register in');
  }
  if (cw.oi) {
    words.push('Output register in');
  }
  if (cw.ce) {
    words.push('Counter enable');
  }
  if (cw.co) {
    words.push('Counter out');
  }
  if (cw.j) {
    words.push('Jump');
  }
  if (cw.jc) {
    words.push('Jump conditional');
  }

  const str = words.join(', ');
  return (
    <div id="controlWord" className="module">
      <div className="value">
      {str}
      </div>
    </div>
  );
};

export default ControlWord;
