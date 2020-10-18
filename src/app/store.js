import { configureStore } from '@reduxjs/toolkit';

import cpuReducer from '../features/cpu/cpuSlice';
import clockReducer from '../features/clock/clockSlice';
import busReducer from '../features/bus/busSlice';
import registerReducer from '../features/register/registerSlice';
import ucounterReducer from '../features/controller/ucounterSlice'
import programCounterReducer from '../features/controller/programCounterSlice'

export default configureStore({
  reducer: {
    cpu: cpuReducer,
    clock: clockReducer,
    bus: busReducer,
    register: registerReducer,
    ucounter: ucounterReducer,
    programCounter: programCounterReducer,
  },
});
