import { MENTOR, MENTOR_LIST, STUDENT, STUDENT_LIST } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchMentors: builder.mutation({
      query: (queryStr) => ({
        url: '/group',
        method: 'GET',
        params: { query: queryStr || '', groupType: 'MENTORGROUP' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((mentor) => ({ type: MENTOR, id: mentor.groupId })),
    }),

    getMentorInfo: builder.query({
      query: (groupId) => ({
        url: '/mentor/info',
        method: 'GET',
        params: { groupId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: MENTOR, id: result.groupId },
      ],
    }),

    getMentorGroupStudents: builder.query({
      query: (groupId) => ({
        url: '/group/user',
        method: 'GET',
        params: { groupId, role: 'STUDENT' },
      }),
      providesTags: (result = [], error, arg) =>
        result
          .map((student) => ({ type: STUDENT, id: student.userId }))
          .concat([{ type: STUDENT_LIST, id: arg.groupId }]),
    }),

    addNewMentorGroup: builder.mutation({
      query: ({ mentorId, groupName }) => ({
        url: '/mentor',
        method: 'POST',
        body: { mentorId, groupName },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: MENTOR_LIST, id: arg.mentorId },
      ],
    }),

    removeMentorGroup: builder.mutation({
      query: ({ groupId }) => ({
        url: '/group',
        method: 'DELETE',
        params: { groupId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: MENTOR, id: arg.groupId },
      ],
    }),
  }),
})

export const {
  useSearchMentorsMutation,
  useGetMentorGroupStudentsQuery,
  useGetMentorInfoQuery,
  useAddNewMentorGroupMutation,
  useRemoveMentorGroupMutation,
} = extendedApi
