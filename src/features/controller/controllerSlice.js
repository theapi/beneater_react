import { createSlice } from '@reduxjs/toolkit';
import { rom } from './isa_rom';

const bitRead = (value, bit) => {
  return (value >> bit) & 0x01;
};

/**
 * Extract the rom value to a json object of the control word.
 * @param {integer} value
 */
const decode = value => {
  return {
    hlt: bitRead(value,15), // Halt
    mi: bitRead(value, 14), // MAR in
    ri: bitRead(value, 13), // RAM in
    ro: bitRead(value, 12), // RAM out
    io: bitRead(value, 11), // Instruction out
    ii: bitRead(value, 10), // Instruction in
    ai: bitRead(value, 9),  // A register in
    ao: bitRead(value, 8),  // A register out
    eo: bitRead(value, 7),  // ALU out
    su: bitRead(value, 6),  // Subtract
    bi: bitRead(value, 5),  // B register in
    oi: bitRead(value, 4),  // Output register in
    ce: bitRead(value, 3),  // Counter enable
    co: bitRead(value, 2),  // Counter out
    j:  bitRead(value, 1),  // Jump
    jc: bitRead(value, 0),  // Jump conditional
  };
};

export const controllerSlice = createSlice({
  name: 'controller',
  initialState: {
    romValue: false,
    cw: {},
  },

  reducers: {
    buildControlWord: (state, action) => {
      const memory = rom();
      const { regInstruction, ucount } = action.payload;

      // The instruction is the higher nibble of what comes from the Ram.
      // The lower nibble byte of Ram is the operand.
      // So mask off the lower nibble.
      const instruction = regInstruction & 0xF0;
      // The lower nibble is the micro code counter value.
      const readAddress = instruction | ucount;
      state.romValue = memory[readAddress];
      state.cw = decode(state.romValue);
    },
  },
});

export const { buildControlWord } = controllerSlice.actions;

export const selectRomValue = state => state.controller.romValue;
export const selectControlWord = state => state.controller.cw;

export default controllerSlice.reducer;
