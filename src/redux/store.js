import { configureStore } from '@reduxjs/toolkit';
import { catsReducer } from './cats/cats.slice';
import { themeReducer } from './theme/theme.slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  devTools: true,

  reducer: {
    cats: catsReducer,
    theme: themeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
