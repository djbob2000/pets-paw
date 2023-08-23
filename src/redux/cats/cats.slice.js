import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { catsInitState } from './cats.initState';

import { fetchCats } from './cats.operations';

const catsSlice = createSlice({
  name: 'cats',
  initialState: catsInitState,
  reducers: {
    resetCats: state => {
      state.cats = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCats.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.events = payload;
      })
      .addCase(fetchCats.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetCats } = catsSlice.actions;

const persistConfig = {
  key: 'cats',
  storage,
  //   whitelist: ['cats'],
};
export const catsReducer = persistReducer(persistConfig, catsSlice.reducer);
