import {
  MENTORGROUP,
  MENTORGROUP_LIST,
  STUDENT,
  STUDENT_LIST,
} from '../tagConstants'
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
        result.map((mentor) => ({ type: MENTORGROUP, id: mentor.groupId })),
    }),

    getMentorInfo: builder.query({
      query: (groupId) => ({
        url: '/mentor/info',
        method: 'GET',
        params: { groupId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: MENTORGROUP, id: result.groupId },
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
          .concat([{ type: STUDENT_LIST, id: arg }]),
    }),

    addNewMentorGroup: builder.mutation({
      query: ({ mentorId, groupName }) => ({
        url: '/mentor',
        method: 'POST',
        body: { mentorId, groupName },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: MENTORGROUP_LIST, id: arg.mentorId },
      ],
    }),

    removeMentorGroup: builder.mutation({
      query: ({ groupId }) => ({
        url: '/group',
        method: 'DELETE',
        params: { groupId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: MENTORGROUP, id: arg.groupId },
      ],
    }),

    changeGroupName: builder.mutation({
      query: ({ groupId, groupName }) => ({
        url: '/group',
        method: 'PUT',
        body: { groupId, groupName },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: MENTORGROUP, id: arg.groupId },
      ],
    }),

    changeMentorId: builder.mutation({
      query: ({ groupId, currentMentorId, newMentorId }) => ({
        url: '/mentor',
        method: 'PUT',
        body: { groupId, mentorId: newMentorId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: MENTORGROUP, id: arg.groupId },
        { type: MENTORGROUP_LIST, id: arg.currentMentorId },
        { type: MENTORGROUP_LIST, id: arg.newMentorId },
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
  useChangeGroupNameMutation,
  useChangeMentorIdMutation,
} = extendedApi
