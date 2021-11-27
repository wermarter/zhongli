import { STUDENT } from '../constants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getStudents: build.query({
      query: () => ({
        url: '/user',
        method: 'GET',
        params: { role: 'STUDENT' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((student) => [{ type: STUDENT, id: student.id }]),
    }),
  }),
})

export const { useLazyGetStudentsQuery } = extendedApi
