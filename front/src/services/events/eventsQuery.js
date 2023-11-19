import { api } from '../api.service';

export const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /*
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
    authOnEvent: builder.mutation({
      query: (userData) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: userData,
      }),
    }),
    */
    getEvents: builder.query({
      query: () => ({
        url: `https://www.awdgoogleapis.com/calendar/v3/calendars/${import.meta.env.VITE_STRAPI_CALENDAR_ID}/events`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_BEARER_CALENDAR_TOKEN}`,
        },
      }),
    }),
  }),
});

export const { useGetEventsQuery, useGetOneQuery } = eventsApi;

export const {
  endpoints: { getEvents, getOne },
} = eventsApi;
