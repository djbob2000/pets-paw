import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const getCurrentTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
  isDarkTheme: getCurrentTheme(),
};

const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { switchTheme } = darkThemeSlice.actions;

const persistConfig = {
  key: 'darkTheme',
  storage,
};

export const themeReducer = persistReducer(
  persistConfig,
  darkThemeSlice.reducer
);
