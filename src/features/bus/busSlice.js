import { createSlice } from '@reduxjs/toolkit';

export const busSlice = createSlice({
  name: 'bus',
  initialState: {
    value: 42,
  },
  reducers: {
    setBus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBus } = busSlice.actions;

export const selectBus = state => state.bus.value;

export default busSlice.reducer;
