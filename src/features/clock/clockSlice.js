import { createSlice } from '@reduxjs/toolkit';

export const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    value: false,
  },
  reducers: {
    tick: state => {
      state.value = !state.value;
    },
    // tick: (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    // },
  },
});

export const { tick } = clockSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.clock.value)`
export const selectClock = state => state.clock.value;

export default clockSlice.reducer;
