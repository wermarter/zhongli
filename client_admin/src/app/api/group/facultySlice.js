import { FACULTY, LECTURER } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchFaculties: builder.mutation({
      query: (queryStr) => ({
        url: '/group',
        method: 'GET',
        params: { query: queryStr || '', groupType: 'FACULTY' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((faculty) => ({ type: FACULTY, id: faculty.groupId })),
    }),
    getFacultyInfo: builder.query({
      query: (groupId) => ({
        url: '/faculty/info',
        method: 'GET',
        params: { groupId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: FACULTY, id: result.groupId },
      ],
    }),
    getFacultyLecturers: builder.query({
      query: (groupId) => ({
        url: '/group/user',
        method: 'GET',
        params: { groupId, role: 'LECTURER' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((lecturer) => ({ type: LECTURER, id: lecturer.userId })),
    }),
    addNewFaculty: builder.mutation({
      query: ({ facultyName, facultyDescription }) => ({
        url: '/faculty',
        method: 'POST',
        body: { facultyName, facultyDescription },
      }),
      invalidatesTags: [FACULTY],
    }),
  }),
})

export const {
  useSearchFacultiesMutation,
  useGetFacultyInfoQuery,
  useGetFacultyLecturersQuery,
  useAddNewFacultyMutation,
} = extendedApi
