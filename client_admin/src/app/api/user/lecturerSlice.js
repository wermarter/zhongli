import { COURSE, FACULTY, LECTURER, MENTOR } from '../tagConstants'
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
      providesTags: (result = {}, error, arg) => [
        { type: LECTURER, id: result.id },
      ],
    }),
    getLecturerMentorGroups: builder.query({
      query: (lecturerId) => ({
        url: '/lecturer/mentor',
        method: 'GET',
        params: { lecturerId },
      }),
      providesTags: (result = {}, error, arg) =>
        result.map((mentorGroup) => ({
          type: MENTOR,
          id: mentorGroup.groupId,
        })),
    }),
    getLecturerFaculty: builder.query({
      query: (lecturerId) => ({
        url: '/user/faculty',
        method: 'GET',
        params: { userId: lecturerId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: FACULTY, id: result.groupId },
      ],
    }),
    getLecturerCourses: builder.query({
      query: (lecturerId) => ({
        url: '/lecturer/course',
        method: 'GET',
        params: { lecturerId },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((course) => ({
          type: COURSE,
          id: course.groupId,
        })),
    }),
    addNewLecturer: builder.mutation({
      query: ({ id, name, password, address, facultyId }) => ({
        url: '/user',
        method: 'POST',
        body: { id, name, password, role: 'LECTURER', address, facultyId },
      }),
      invalidatesTags: [LECTURER],
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
} = extendedApi
