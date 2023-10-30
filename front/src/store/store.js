import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { listenerMiddleware } from "../middleware/auth";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMidddleware) =>
    getDefaultMidddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})