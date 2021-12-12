import {
  COURSE,
  COURSE_LIST,
  FACULTY,
  MENTORGROUP,
  STUDENT,
  STUDENT_LIST,
} from '../tagConstants'
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
        { type: MENTORGROUP, id: result.groupId },
        { type: STUDENT, id: arg },
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
        { type: STUDENT, id: arg },
      ],
    }),

    getStudentCourses: builder.query({
      query: (studentId) => ({
        url: '/student/course',
        method: 'GET',
        params: { studentId },
      }),
      providesTags: (result = [], error, arg) =>
        result
          .map((course) => ({
            type: COURSE,
            id: course.groupId,
          }))
          .concat([{ type: COURSE_LIST, id: arg }]),
    }),

    addNewStudent: builder.mutation({
      query: ({ id, name, password, address, facultyId }) => ({
        url: '/user',
        method: 'POST',
        body: { id, name, password, role: 'STUDENT', address, facultyId },
      }),
    }),

    removeStudent: builder.mutation({
      query: ({ userId }) => ({
        url: '/user',
        method: 'DELETE',
        params: { userId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: STUDENT, id: arg.userId },
      ],
    }),

    addStudentCourse: builder.mutation({
      query: ({ userId, groupId }) => ({
        url: '/group/user',
        method: 'POST',
        params: { userId, groupId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE_LIST, id: arg.userId },
        { type: STUDENT_LIST, id: arg.groupId },
      ],
    }),

    removeStudentCourse: builder.mutation({
      query: ({ userId, groupId }) => ({
        url: '/group/user',
        method: 'DELETE',
        params: { userId, groupId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: COURSE_LIST, id: arg.userId },
        { type: STUDENT_LIST, id: arg.groupId },
      ],
    }),

    changeUserPassword: builder.mutation({
      query: ({ userId, password }) => ({
        url: '/user/password',
        method: 'PUT',
        body: { userId, password },
      }),
    }),

    changeStudentInfo: builder.mutation({
      query: ({ id, name, address }) => ({
        url: '/user',
        method: 'PUT',
        body: { id, name, address },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: STUDENT,
          id: arg.id,
        },
      ],
    }),

    changeStudentMentor: builder.mutation({
      query: ({ id, currentMentorGroupId, newMentorGroupId }) => ({
        url: '/user/group',
        method: 'PUT',
        body: {
          userId: id,
          currentGroupId: currentMentorGroupId,
          newGroupId: newMentorGroupId,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: STUDENT, id: arg.id },
        { type: STUDENT_LIST, id: arg.currentMentorGroupId },
        { type: STUDENT_LIST, id: arg.newMentorGroupId },
      ],
    }),

    changeStudentFaculty: builder.mutation({
      query: ({ id, currentFacultyId, newFacultyId }) => ({
        url: '/user/group',
        method: 'PUT',
        body: {
          userId: id,
          currentGroupId: currentFacultyId,
          newGroupId: newFacultyId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: STUDENT, id: arg.id }],
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
  useRemoveStudentMutation,
  useAddStudentCourseMutation,
  useRemoveStudentCourseMutation,
  useChangeUserPasswordMutation,
  useChangeStudentInfoMutation,
  useChangeStudentMentorMutation,
  useChangeStudentFacultyMutation,
} = extendedApi
