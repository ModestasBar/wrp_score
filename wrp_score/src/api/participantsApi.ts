import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const participantsApi = createApi({
  reducerPath: 'participantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: (builder) => ({
    getParticipants: builder.query({
      query: () => '/participants',
    }),
  }),
});

export const { useGetParticipantsQuery } = participantsApi;
