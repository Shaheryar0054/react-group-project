import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Redux/missionsSlice';
import rocketsReducer from './Redux/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
