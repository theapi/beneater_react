import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';
import busReducer from '../features/bus/busSlice';
import registerReducer from '../features/register/registerSlice';

export default configureStore({
  reducer: {
    clock: clockReducer,
    bus: busReducer,
    register: registerReducer,
  },
});
