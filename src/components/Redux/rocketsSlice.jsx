import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';
const LOCAL_STORAGE_KEY = 'rocketDataProfile';

export const fetchRocketsData = createAsyncThunk('rockets/fetchData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const fetchRocketsDataProfile = createAsyncThunk('rockets/fetchProfile', async () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return parsedData;
  }
  const response = await axios.get(API_URL);
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rocketData: [],
    rocketDataProfile: [],
  },
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rocketDataProfile: state.rocketDataProfile.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      }),
    }),
    cancelRocketReservation: (state, action) => ({
      ...state,
      rocketDataProfile: state.rocketDataProfile.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.fulfilled, (state, action) => ({
        ...state,
        rocketData: action.payload,
      }))
      .addCase(fetchRocketsDataProfile.fulfilled, (state, action) => {
        const newState = {
          ...state,
          rocketDataProfile: action.payload,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
        return newState;
      });
  },

});

export const { reserveRocket, cancelRocketReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
