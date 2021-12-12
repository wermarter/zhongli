import {
  COURSE,
  COURSE_LIST,
  FACULTY,
  LECTURER,
  LECTURER_LIST,
  MENTORGROUP,
  MENTORGROUP_LIST,
} from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchLecturers: builder.mutation({
      query: (queryStr) => ({
        url: '/user',
        method: 'GET',
        params: { role: 'LECTURER', query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((lecturer) => ({ type: LECTURER, id: lecturer.id })),
    }),

    getLecturerInfo: builder.query({
      query: (lecturerId) => ({
        url: '/user/info',
        method: 'GET',
        params: { userId: lecturerId },
      }),
      providesTags: (result, error, arg) => [{ type: LECTURER, id: arg }],
    }),

    getLecturerMentorGroups: builder.query({
      query: (lecturerId) => ({
        url: '/lecturer/mentor',
        method: 'GET',
        params: { lecturerId },
      }),
      providesTags: (result = {}, error, arg) =>
        result
          .map((mentorGroup) => ({
            type: MENTORGROUP,
            id: mentorGroup.groupId,
          }))
          .concat([{ type: MENTORGROUP_LIST, id: arg }]),
    }),

    getLecturerFaculty: builder.query({
      query: (lecturerId) => ({
        url: '/user/faculty',
        method: 'GET',
        params: { userId: lecturerId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: FACULTY, id: result.groupId },
        { type: LECTURER, id: arg },
      ],
    }),

    getLecturerCourses: builder.query({
      query: (lecturerId) => ({
        url: '/lecturer/course',
        method: 'GET',
        params: { lecturerId },
      }),
      providesTags: (result = [], error, arg) =>
        result
          .map((course) => ({
            type: COURSE,
            id: course.groupId,
          }))
          .concat([{ type: COURSE_LIST, id: arg }]),
    }),

    addNewLecturer: builder.mutation({
      query: ({ id, name, password, address, facultyId }) => ({
        url: '/user',
        method: 'POST',
        body: { id, name, password, role: 'LECTURER', address, facultyId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: LECTURER_LIST, id: arg.facultyId },
      ],
    }),

    removeLecturer: builder.mutation({
      query: ({ userId }) => ({
        url: '/user',
        method: 'DELETE',
        params: { userId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: LECTURER, id: arg.userId },
      ],
    }),

    changeLecturerInfo: builder.mutation({
      query: ({ id, name, address }) => ({
        url: '/user',
        method: 'PUT',
        body: { id, name, address },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: LECTURER,
          id: arg.id,
        },
      ],
    }),

    changeLecturerFaculty: builder.mutation({
      query: ({ id, currentFacultyId, newFacultyId }) => ({
        url: '/user/group',
        method: 'PUT',
        body: {
          userId: id,
          currentGroupId: currentFacultyId,
          newGroupId: newFacultyId,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: LECTURER, id: arg.id },
        { type: LECTURER_LIST, id: arg.currentFacultyId },
        { type: LECTURER_LIST, id: arg.newFacultyId },
      ],
    }),
  }),
})

export const {
  useSearchLecturersMutation,
  useGetLecturerMentorGroupsQuery,
  useGetLecturerCoursesQuery,
  useGetLecturerFacultyQuery,
  useGetLecturerInfoQuery,
  useAddNewLecturerMutation,
  useRemoveLecturerMutation,
  useChangeLecturerInfoMutation,
  useChangeLecturerFacultyMutation,
} = extendedApi
