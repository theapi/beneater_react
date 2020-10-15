import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    values: {},
  },
  reducers: {
    reset: state => {
      state.values = {};
    },
    load: (state, action) => {
      console.log(action);
      state.values[action.payload.key] = action.payload.value;
    },
  },
});

export const { reset, load } = registerSlice.actions;

export const selectRegister = state => state.register.values;

export default registerSlice.reducer;
