import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../config'
import { logout, selectJWT } from '../authSlice'
import {
  COURSE,
  COURSE_LIST,
  FACULTY,
  LECTURER,
  LECTURER_LIST,
  MENTORGROUP,
  MENTORGROUP_LIST,
  STUDENT,
  STUDENT_LIST,
} from './tagConstants'
import { loadingStarted, loadingDone } from '../pageSlice'

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
  api.dispatch(loadingStarted())
  let result = await authorizedBaseQuery(args, api, extraOptions)
  api.dispatch(loadingDone())

  if (result.error && result.error.status === 401) {
    // // login again
    // await api.dispatch(adminLogin())
    // // retry the initial query
    // result = await authorizedBaseQuery(args, api, extraOptions)
    api.dispatch(logout()) // TODO: logout with messages: Logout successfully/ Token timeout
  }
  return result
}

// Define our single API slice object
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  refetchOnReconnect: true,
  tagTypes: [
    COURSE,
    FACULTY,
    MENTORGROUP,
    LECTURER,
    STUDENT,
    MENTORGROUP_LIST,
    STUDENT_LIST,
    LECTURER_LIST,
    COURSE_LIST,
  ],
  endpoints: () => ({}),
})
