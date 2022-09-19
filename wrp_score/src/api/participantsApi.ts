import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

enum TAG_TYPE {
  PARTICIPANTS = 'participants',
}

// Define a service using a base URL and expected endpoints
export const participantsApi = createApi({
  reducerPath: 'participantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  tagTypes: [TAG_TYPE.PARTICIPANTS],
  endpoints: (builder) => ({
    getParticipants: builder.query({
      query: () => '/participants',
      providesTags: [TAG_TYPE.PARTICIPANTS],
    }),
    registerNewParticipant: builder.mutation({
      query: (newParticipant) => ({
        url: '/participants',
        method: 'POST',
        body: newParticipant,
      }),
      invalidatesTags: [TAG_TYPE.PARTICIPANTS],
    }),
  }),
});

export const { useGetParticipantsQuery, useRegisterNewParticipantMutation } =
  participantsApi;
