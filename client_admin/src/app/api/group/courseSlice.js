import { COURSE, STUDENT } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchCourses: builder.mutation({
      query: (queryStr) => ({
        url: '/group',
        method: 'GET',
        params: { query: queryStr || '', groupType: 'COURSE' },
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
    addNewCourse: builder.mutation({
      query: ({ courseName, timeSlot, lecturerId }) => ({
        url: '/course',
        method: 'POST',
        body: { courseName, timeSlot, lecturerId },
      }),
      invalidatesTags: [COURSE],
    }),
    removeCourse: builder.mutation({
      query: ({ groupId }) => ({
        url: '/group',
        method: 'DELETE',
        params: { groupId },
      }),
      invalidatesTags: [COURSE],
    }),
  }),
})

export const {
  useSearchCoursesMutation,
  useGetCourseInfoQuery,
  useGetCourseStudentsQuery,
  useAddNewCourseMutation,
  useRemoveCourseMutation,
} = extendedApi
