import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../services/auth/authQuery";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.jwt) {
      localStorage.setItem("jwt", action.payload.jwt);
    }
  },
});
