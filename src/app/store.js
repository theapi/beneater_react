import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';
import busReducer from '../features/bus/busSlice';
import registerReducer from '../features/register/registerSlice';
import ucounterReducer from '../features/controller/ucounterSlice'

export default configureStore({
  reducer: {
    clock: clockReducer,
    bus: busReducer,
    register: registerReducer,
    ucounter: ucounterReducer,
  },
});
