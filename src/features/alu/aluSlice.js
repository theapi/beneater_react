import { createSlice } from '@reduxjs/toolkit';

export const aluSlice = createSlice({
  name: 'alu',
  initialState: {
    value: 0,
  },

  reducers: {
    calculate: (state, action) => {
      const { regA, regB, sub } = action.payload;
      if (Number.isInteger(regA) && Number.isInteger(regB)) {
        if (sub) {
          state.value = regA - regB;
        } else {
          state.value = regA + regB;
        }
      }
    },
  },
});

export const { calculate } = aluSlice.actions;

export const selectAlu = state => state.alu.value;

export default aluSlice.reducer;
