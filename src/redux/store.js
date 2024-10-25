// store.js
import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from './stepperSlice';

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
  },
});

export default store;
