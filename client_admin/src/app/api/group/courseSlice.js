import { COURSE, STUDENT } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchCourses: builder.query({
      query: (queryStr) => ({
        url: '/course',
        method: 'GET',
        params: { query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((course) => ({ type: COURSE, id: course.groupId })),
    }),
    getCourseInfo: builder.query({
      query: (groupId) => ({
        url: '/course/info',
        method: 'GET',
        params: { groupId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: COURSE, id: result.groupId },
      ],
    }),
    getCourseStudents: builder.query({
      query: (groupId) => ({
        url: '/group/user',
        method: 'GET',
        params: { groupId, role: 'STUDENT' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((student) => ({ type: STUDENT, id: student.userId })),
    }),
  }),
})

export const {
  useLazySearchCoursesQuery,
  useGetCourseInfoQuery,
  useGetCourseStudentsQuery,
} = extendedApi
