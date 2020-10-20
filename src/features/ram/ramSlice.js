import { createSlice } from '@reduxjs/toolkit';
import { program } from './program';

export const ramSlice = createSlice({
  name: 'ram',
  initialState: {
    value: 0,
    address: 0,
  },

  reducers: {
    load: (state, action) => {
      state.address = action.payload;
      const memory = program();
      state.value = memory[state.address];
    },
  },
});

export const { load } = ramSlice.actions;

export const selectRamValue = state => state.ram.value;
export const selectRamAddress = state => state.ram.address;

export default ramSlice.reducer;
