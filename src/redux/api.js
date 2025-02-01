import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aviasales-test-api.kata.academy/',
  }),
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: (searchId) => `tickets?searchId=${searchId}`,
    }),
    getSearchId: builder.query({
      query: () => 'search',
      transformResponse: (response) => response.searchId,
    }),
  }),
});

export const { useGetTicketsQuery, useGetSearchIdQuery } = ticketApi;

export default ticketApi;
