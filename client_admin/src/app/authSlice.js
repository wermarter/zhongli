import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import config from '../config'

const initialState = {
  user: {
    id: null,
    psid: null,
    name: null,
    role: null,
    displayId: null,
  },
  jwt: null,
}

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async ({ userId, password }, thunkAPI) => {
    const response = await fetch(`${config.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, password }),
    })
    if (!response.ok) {
      thunkAPI.rejectWithValue(response)
    }
    return response.json()
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {}, // state will be reset in root reducer
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.jwt = payload.accessToken
      state.user = {
        id: payload.id,
        psid: payload.psid,
        name: payload.name,
        role: payload.role,
        displayId: payload.displayId,
      }
    })
  },
})

export const selectJWT = (state) => state[authSlice.name].jwt

export const { logout } = authSlice.actions
