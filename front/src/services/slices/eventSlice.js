import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { eventsApi } from '../events/eventsQuery';

const initialState = {
  events: null,
  error: null,
  isLoading: false
};

export const getEvents = createAsyncThunk('get/events', async (_, thunkAPI) => {
  try {
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${import.meta.env.VITE_STRAPI_CALENDAR_ID}/events`, {
      headers: {
        Authorization: `Bearer ya29.a0AfB_byA3SDsudKPlL9fJIO-MHxDOQPW9Q2q_AKd29m6L-_kqUMrXwMiECFphSdGUebPYnYecM08lWpDZk3emZSQLS4DicWrERHsAXRKVxB8QqdTp4ti2eq0jQbcw0PK2oZQlOkFlyMQ01LxOVLqPUw6TVf7MRwXWJy7HaCgYKARQSAQ4SFQHGX2MiyL4PtN8jKPSNQJhCuVa6Dw0171`,
      },
    }).then((r) => r.json())
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.events = action.payload
        state.isLoading = false
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.error = action.payload
        state.events = null
        state.isLoading = true
      })
  }
});

export default eventsSlice.reducer;

export const selectorEvents = (state) => state.events.events;
