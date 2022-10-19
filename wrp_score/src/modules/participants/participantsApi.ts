import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IParticipant } from '../../dto/participant.dto';

enum TAG_TYPE {
  PARTICIPANTS = 'participants',
}

// Define a service using a base URL and expected endpoints
export const participantsApi = createApi({
  reducerPath: 'participantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  tagTypes: [TAG_TYPE.PARTICIPANTS],
  endpoints: (builder) => ({
    getParticipants: builder.query<IParticipant[], unknown>({
      query: () => '/participants',
      providesTags: [TAG_TYPE.PARTICIPANTS],
    }),
    registerNewParticipant: builder.mutation({
      query: (newParticipant: IParticipant) => ({
        url: '/participants',
        method: 'POST',
        body: newParticipant,
      }),
      invalidatesTags: [TAG_TYPE.PARTICIPANTS],
    }),
    updateParticipant: builder.mutation({
      query: (participant: IParticipant) => ({
        url: `/participants/${participant.id}`,
        method: 'PUT',
        body: participant,
      }),
      invalidatesTags: [TAG_TYPE.PARTICIPANTS],
    }),
  }),
});

export const {
  useGetParticipantsQuery,
  useRegisterNewParticipantMutation,
  useUpdateParticipantMutation,
} = participantsApi;
