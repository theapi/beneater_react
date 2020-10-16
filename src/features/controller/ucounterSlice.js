import { createSlice } from '@reduxjs/toolkit';

export const ucounterSlice = createSlice({
  name: 'ucounter',
  initialState: {
    value: 0,
  },

  reducers: {
    reset: state => {
      state.value = 0;
    },
    increment: state => {
      // Increment, but only up to 4.
      if (state.value < 4) {
        state.value++;
      } else {
        state.value = 0;
      }
    },
  },
});

export const { reset, increment } = ucounterSlice.actions;

export const selectUCount = state => state.ucounter.value;

export default ucounterSlice.reducer;
