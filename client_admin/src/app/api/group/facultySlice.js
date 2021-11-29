import { FACULTY } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaculties: builder.query({
      query: () => ({
        url: '/faculty',
        method: 'GET',
      }),
      providesTags: (result = [], error, arg) =>
        result.map((faculty) => ({ type: FACULTY, id: faculty.groupId })),
    }),
  }),
})

export const { useLazyGetFacultiesQuery } = extendedApi
