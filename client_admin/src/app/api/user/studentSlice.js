import { COURSE, FACULTY, MENTOR, STUDENT } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchStudents: builder.mutation({
      query: (queryStr) => ({
        url: '/user',
        method: 'GET',
        params: { role: 'STUDENT', query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((student) => ({ type: STUDENT, id: student.id })),
    }),
    getStudentInfo: builder.query({
      query: (studentId) => ({
        url: '/user/info',
        method: 'GET',
        params: { userId: studentId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: STUDENT, id: result.id },
      ],
    }),
    getStudentMentorGroup: builder.query({
      query: (studentId) => ({
        url: '/student/mentor',
        method: 'GET',
        params: { studentId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: MENTOR, id: result.groupId },
      ],
    }),
    getStudentFaculty: builder.query({
      query: (studentId) => ({
        url: '/user/faculty',
        method: 'GET',
        params: { userId: studentId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: FACULTY, id: result.groupId },
      ],
    }),
    getStudentCourses: builder.query({
      query: (studentId) => ({
        url: '/student/course',
        method: 'GET',
        params: { studentId },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((course) => ({
          type: COURSE,
          id: course.groupId,
        })),
    }),
    addNewStudent: builder.mutation({
      query: ({ id, name, password, address, facultyId }) => ({
        url: '/user',
        method: 'POST',
        body: { id, name, password, role: 'STUDENT', address, facultyId },
      }),
      invalidatesTags: (result, error, arg) => [STUDENT],
    }),
  }),
})

export const {
  useSearchStudentsMutation,
  useGetStudentMentorGroupQuery,
  useGetStudentCoursesQuery,
  useGetStudentFacultyQuery,
  useGetStudentInfoQuery,
  useAddNewStudentMutation,
} = extendedApi
