import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRocketsData = createAsyncThunk(
  'rockets/fetchData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rocketData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, action) => ({
      ...state,
      rocketData: action.payload,
    }));
  },
});

export default rocketsSlice.reducer;
