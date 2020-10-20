import { createSlice } from '@reduxjs/toolkit';

export const aluSlice = createSlice({
  name: 'alu',
  initialState: {
    value: 0,
  },

  reducers: {
    calculate: (state, action) => {
      let { regA, regB, sub } = action.payload;
      if (!Number.isInteger(regA)) {
        regA = 0;
      }
      if (!Number.isInteger(regB)) {
        regB = 0;
      }

      if (sub) {
        state.value = regA - regB;
      } else {
        state.value = regA + regB;
      }

    },
  },
});

export const { calculate } = aluSlice.actions;

export const selectAlu = state => state.alu.value;

export default aluSlice.reducer;
