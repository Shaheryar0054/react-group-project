import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Redux/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});

export default store;
