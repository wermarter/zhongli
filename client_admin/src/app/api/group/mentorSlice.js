import { MENTOR } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchMentors: builder.query({
      query: (queryStr) => ({
        url: '/mentor',
        method: 'GET',
        params: { query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((mentor) => ({ type: MENTOR, id: mentor.groupId })),
    }),
  }),
})

export const { useLazySearchMentorsQuery } = extendedApi
