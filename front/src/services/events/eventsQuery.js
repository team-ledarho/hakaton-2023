import { api } from '../api.service';

export const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => ({
        url: '/events-api?populate=*',
        method: 'GET',
      }),
    }),
    getOne: builder.query({
      query: (slug) => ({
        url: `/events-api?filters[slug][$eq]=${slug}&populate=*`,
        method: 'GET',
      })
    }),
    // authOnEvent: builder.mutation({
    //   query: (userData) => ({
    //     url: '/auth/local/register',
    //     method: 'POST',
    //     body: userData,
    //   }),
    // }),
  }),
});

export const { useGetAllEventsQuery, useGetOneQuery } =
  eventsApi;

export const {
  endpoints: { getAllEvents, getOne },
} = eventsApi;
