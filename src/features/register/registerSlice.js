import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    values: {
      regInstruction: 0,
      regMar: 0,
      regA: 0,
      regB: 0,
      regOut: 0,
    },
  },
  reducers: {
    reset: state => {
      state.values = {}; // NO! must be same as initial state
    },
    load: (state, action) => {
      state.values[action.payload.key] = action.payload.value;
    },
  },
});

export const { reset, load } = registerSlice.actions;

export const selectRegisters = state => state.register.values;

export default registerSlice.reducer;
