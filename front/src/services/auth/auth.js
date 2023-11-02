import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/local",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/local/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCurrentQuery, useLoginMutation, useRegisterMutation } =
  authApi;

export const {
  endpoints: { login, register },
} = authApi;
