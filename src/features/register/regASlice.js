import { createSlice } from '@reduxjs/toolkit';

export const regASlice = createSlice({
  name: 'regA',
  initialState: {
    value: 0,
  },
  reducers: {
    reset: state => {
      state.value = 0;
    },
    load: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { reset, load } = regASlice.actions;

export const selectRegA = state => state.regA.value;

export default regASlice.reducer;
