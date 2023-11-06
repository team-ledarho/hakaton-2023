import { api } from '../api.service';

export const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: (page) => ({
        url: `/events-api?pagination[pageSize]=8&pagination[page]=${page}&populate=*`,
        method: 'GET',
      }),
    }),
    getOne: builder.query({
      query: (slug) => ({
        url: `/events-api?filters[slug][$eq]=${slug}&populate=*`,
        method: 'GET',
      }),
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

export const { useGetEventsQuery, useGetOneQuery } = eventsApi;

export const {
  endpoints: { getEvents, getOne },
} = eventsApi;
