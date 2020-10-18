import { createSlice } from '@reduxjs/toolkit';

export const programCounterSlice = createSlice({
  name: 'programCounter',
  initialState: {
    value: 0,
    reset: false,
  },

  reducers: {
    reset: (state, action) => {
      if (action.payload) {
        state.value = 0;
        state.reset = true;
      } else {
        state.reset = false;
      }
    },
    increment: state => {
      if (state.reset) {
        // Do nothing while in reset.
        return;
      }
      // Increment, but only up to 15.
      if (state.value < 15) {
        state.value++;
      } else {
        state.value = 0;
      }
    },
    load: (state, action) => {
      if (state.reset) {
        // Do nothing while in reset.
        return;
      }
      state.value = action.payload.value;
    },
  },
});

export const { reset, increment, load } = programCounterSlice.actions;

export const selectPC = state => state.programCounter.value;

export default programCounterSlice.reducer;
