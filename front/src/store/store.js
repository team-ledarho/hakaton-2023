import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api.service";
import { listenerMiddleware } from "../middleware/auth.middleware";
import auth from "../services/slices/authSlice";
import { authApi } from "../services/auth/authQuery";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth,
  },
  middleware: (getDefaultMidddleware) =>
    getDefaultMidddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});
