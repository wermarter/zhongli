import { LECTURER } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchLecturers: builder.query({
      query: (queryStr) => ({
        url: '/user',
        method: 'GET',
        params: { role: 'LECTURER', query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((lecturer) => ({ type: LECTURER, id: lecturer.id })),
    }),
  }),
})

export const { useLazySearchLecturersQuery } = extendedApi
