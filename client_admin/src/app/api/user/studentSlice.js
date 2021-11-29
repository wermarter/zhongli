import { STUDENT } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchStudents: builder.query({
      query: (queryStr) => ({
        url: '/user',
        method: 'GET',
        params: { role: 'STUDENT', query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((student) => ({ type: STUDENT, id: student.id })),
    }),
  }),
})

export const { useLazySearchStudentsQuery } = extendedApi
