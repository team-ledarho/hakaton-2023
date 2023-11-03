import { fetchBaseQuery, createApi, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337/api",
  prepareHeaders: (headers, { getState }) => {
    const jwt =
      getState().authReducer?.user?.jwt || localStorage.getItem("jwt");

    if (jwt && jwt !== null) {
      headers.set("authorization", `Bearer ${jwt}`);
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
