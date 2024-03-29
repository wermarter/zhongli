import { FACULTY, LECTURER, LECTURER_LIST } from '../tagConstants'
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
        result
          .map((lecturer) => ({ type: LECTURER, id: lecturer.userId }))
          .concat([{ type: LECTURER_LIST, id: arg }]),
    }),

    addNewFaculty: builder.mutation({
      query: ({ facultyName, displayId }) => ({
        url: '/faculty',
        method: 'POST',
        body: { facultyName, displayId },
      }),
    }),

    removeFaculty: builder.mutation({
      query: ({ groupId }) => ({
        url: '/group',
        method: 'DELETE',
        params: { groupId },
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: FACULTY, id: arg.groupId },
      ],
    }),

    changeFacultyName: builder.mutation({
      query: ({ groupId, groupName }) => ({
        url: '/group/name',
        method: 'PUT',
        body: { groupId, groupName },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: FACULTY, id: arg.groupId },
      ],
    }),

    changeFacultyDisplayId: builder.mutation({
      query: ({ groupId, displayId }) => ({
        url: '/group/displayId',
        method: 'PUT',
        body: { groupId, displayId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: FACULTY, id: arg.groupId },
      ],
    }),

    changeFacultyAdmin: builder.mutation({
      query: ({ groupId, adminId }) => ({
        url: '/faculty',
        method: 'PUT',
        body: { groupId, adminId },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: FACULTY, id: arg.groupId },
      ],
    }),
  }),
})

export const {
  useSearchFacultiesMutation,
  useGetFacultyInfoQuery,
  useGetFacultyLecturersQuery,
  useAddNewFacultyMutation,
  useRemoveFacultyMutation,
  useChangeFacultyNameMutation,
  useChangeFacultyDisplayIdMutation,
  useChangeFacultyAdminMutation,
} = extendedApi
