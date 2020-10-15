import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';
import busReducer from '../features/bus/busSlice';
import regAReducer from '../features/register/regASlice';

export default configureStore({
  reducer: {
    clock: clockReducer,
    bus: busReducer,
    regA: regAReducer,
  },
});
