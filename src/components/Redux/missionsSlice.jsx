import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const missionsApi = createAsyncThunk('fethmission', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const MissionsSlice = createSlice({
  name: 'mission',
  initialState: { missions: [] },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(missionsApi.fulfilled, (state, action) => ({ ...state, missions: action.payload }));
  },

});

export default MissionsSlice.reducer;
