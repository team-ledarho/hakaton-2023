import { createSlice } from '@reduxjs/toolkit';
import { eventsApi } from '../events/eventsQuery';

const initialState = {
  events: null,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(eventsApi.endpoints.getAllEvents.matchFulfilled, (state, action) => {
        state.events = action.payload;
      })
  },
});

export default eventsSlice.reducer;

export const selectorEvents = (state) => state.events.events;
