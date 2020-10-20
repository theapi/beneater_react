import { createSlice } from '@reduxjs/toolkit';

export const cpuSlice = createSlice({
  name: 'cpu',
  initialState: {
    reset: false, // Reset to start values
  },
  reducers: {
    reset: (state, action) => {
      state.reset = action.payload;
    },
  },
});

export const {
  reset,
} = cpuSlice.actions;

export const selectReset = state => state.cpu.reset;

export default cpuSlice.reducer;
