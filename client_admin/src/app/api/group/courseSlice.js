import { COURSE } from '../tagConstants'
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
  }),
})

export const { useLazySearchCoursesQuery } = extendedApi
