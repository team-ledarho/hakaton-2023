import { api } from '../api.service';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: '/auth/local',
        method: 'POST',
        body: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: userData,
      }),
    }),
    current: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
    }),
    update: builder.mutation({
      query: (userData) => ({
        url: `/users/${userData.id}`,
        method: 'PUT',
        body: userData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useUpdateMutation,
} = authApi;

export const {
  endpoints: { login, register, current, update },
} = authApi;
