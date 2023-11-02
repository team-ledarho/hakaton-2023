import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { listenerMiddleware } from "../middleware/auth";
import authReducer from "../services/slices/auth";
import { authApi } from "../services/auth/auth";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authReducer,
  },
  middleware: (getDefaultMidddleware) =>
    getDefaultMidddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});
