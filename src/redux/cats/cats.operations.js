import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/images/search', {
        params: {
          page: 1,
          limit: 10,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
