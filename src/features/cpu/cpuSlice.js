import { createSlice } from '@reduxjs/toolkit';

export const cpuSlice = createSlice({
  name: 'cpu',
  initialState: {
    reset: false,     // Reset to start values
    clk: false,       // Cpu clock
    bus: 0,           // The main bus
    controlWord: {},
  },
  reducers: {
    reset: (state, action) => {
      state.reset = action.payload;
    },
    setClock: (state, action) => {
      state.clk = action.payload;
    },
    setBus: (state, action) => {
      state.bus = action.payload;
    },
    setControlWord: (state, action) => {
      state.controlWord = action.payload;
    },
  },
});

export const {
  reset,
  setClock,
  setBus,
  setControlWord
} = cpuSlice.actions;

// export const selectRegister = state => state.register.values;

export default cpuSlice.reducer;
