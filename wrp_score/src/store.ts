import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import competitionSlice from './modules/competitionSlice';
import { participantsApi } from './modules/participantsApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [participantsApi.reducerPath]: participantsApi.reducer,
    competitionDetails: competitionSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(participantsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
