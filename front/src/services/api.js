import {fetchBaseQuery, createApi, retry} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3333/api",
    prepareHeaders: (headers, { getState }) => {
        const token =
          getState().auth.user?.token ||
          localStorage.getItem("token");
    
        if (token && token !== null) {
          headers.set("authorization", `Bearer ${token}`);
        }
      },
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})

export const api = createApi({
    reducerPath: "splitApi",
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
  });