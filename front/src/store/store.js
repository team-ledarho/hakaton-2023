import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api.service';
import { listenerMiddleware } from '../middleware/auth.middleware';
import auth from '../services/slices/authSlice';
import events from '../services/slices/eventSlice';
import { authApi } from '../services/auth/authQuery';
import { eventsApi } from '../services/events/eventsQuery';
import popup from './../services/slices/popupSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    auth,
    events,
    popup
  },
  middleware: (getDefaultMidddleware) =>
    getDefaultMidddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});
