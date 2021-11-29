import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../config'
import { adminLogin, selectJWT } from '../authSlice'
import { COURSE, FACULTY, LECTURER, MENTOR, STUDENT } from './tagConstants'

const authorizedBaseQuery = fetchBaseQuery({
  baseUrl: `${config.apiUrl}/api`,

  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = selectJWT(getState())
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await authorizedBaseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // login again
    api.dispatch(adminLogin())
    // retry the initial query
    result = await authorizedBaseQuery(args, api, extraOptions) // ? doens't seem to work ?
  }
  return result
}

// Define our single API slice object
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [COURSE, FACULTY, MENTOR, LECTURER, STUDENT],
  endpoints: () => ({}),
})
