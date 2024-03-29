import { COURSE, COURSE_LIST, STUDENT, STUDENT_LIST } from '../tagConstants'
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
      providesTags: (result, error, arg) => [{ type: COURSE, id: arg }],
    }),

    getCourseStudents: builder.query({
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

    addNewCourse: builder.mutation({
      query: ({ courseName, timeSlot, lecturerId, displayId }) => ({
        url: '/course',
        method: 'POST',
        body: { courseName, timeSlot, lecturerId, displayId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: COURSE_LIST, id: arg.lecturerId },
      ],
    }),

    removeCourse: builder.mutation({
      query: ({ groupId }) => ({
        url: '/group',
        method: 'DELETE',
        params: { groupId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: COURSE, id: arg.groupId },
      ],
    }),

    changeCourseName: builder.mutation({
      query: ({ groupId, groupName }) => ({
        url: '/group/name',
        method: 'PUT',
        body: { groupId, groupName },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE, id: arg.groupId },
      ],
    }),

    changeCourseDisplayId: builder.mutation({
      query: ({ groupId, displayId }) => ({
        url: '/group/displayId',
        method: 'PUT',
        body: { groupId, displayId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE, id: arg.groupId },
      ],
    }),

    changeCourseTimeSlot: builder.mutation({
      query: ({ groupId, timeSlot }) => ({
        url: '/course/timeslot',
        method: 'PUT',
        body: { groupId, timeSlot },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE, id: arg.groupId },
      ],
    }),

    changeCourseLecturer: builder.mutation({
      query: ({ groupId, currentLecturerId, newLecturerId }) => ({
        url: '/course/lecturer',
        method: 'PUT',
        body: { groupId, lecturerId: newLecturerId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE, id: arg.groupId },
        { type: COURSE_LIST, id: arg.currentLecturerId },
        { type: COURSE_LIST, id: arg.newLecturerId },
      ],
    }),
  }),
})

export const {
  useSearchCoursesMutation,
  useGetCourseInfoQuery,
  useGetCourseStudentsQuery,
  useAddNewCourseMutation,
  useRemoveCourseMutation,
  useChangeCourseNameMutation,
  useChangeCourseTimeSlotMutation,
  useChangeCourseLecturerMutation,
  useChangeCourseDisplayIdMutation,
} = extendedApi
