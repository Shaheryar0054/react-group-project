import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://api.spacexdata.com/v3/missions';
const LOCAL_STORAGE_KEY2 = 'missionsDataProfile';

export const missionsApi = createAsyncThunk('fetchMissions', async () => {
  const response = await fetch(API_URL);
  const data = await response.json(); // Extract the data from the response
  return data;
});

export const fetchmissionDataProfile = createAsyncThunk('fetchProfile', async () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY2);
  if (stored) {
    const parsedDat = JSON.parse(stored);
    return parsedDat;
  }
  const response = await fetch(API_URL);
  return response.data;
});

const MissionsSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    missionsDataProfile: [],
  },
  reducers: {
    joinMission: (state, action) => {
      state.missionsDataProfile = state.missionsDataProfile.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(state.missionsDataProfile));
    },

    leaveMission: (state, action) => {
      state.missionsDataProfile = state.missionsDataProfile.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(state.missionsDataProfile));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(missionsApi.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }))
      .addCase(fetchmissionDataProfile.fulfilled, (state, action) => {
        const updatedState = {
          ...state,
          missionsDataProfile: action.payload,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(updatedState.missionsDataProfile));
        return updatedState;
      });
  },
});

export default MissionsSlice.reducer;

export const { joinMission, leaveMission } = MissionsSlice.actions;
