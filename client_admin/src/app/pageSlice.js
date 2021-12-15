import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedStudentId: undefined,
  selectedLecturerId: undefined,
  selectedMentorId: undefined,
  selectedCourseId: undefined,
  selectedFacultyId: undefined,
  loadingCount: 0,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    loadingStarted: (state, action) => {
      state.loadingCount++
    },
    loadingDone: (state, action) => {
      state.loadingCount--
    },
    setSelectedStudentId: (state, action) => {
      state.selectedStudentId = action.payload
    },
    setSelectedLecturerId: (state, action) => {
      state.selectedLecturerId = action.payload
    },
    setSelectedMentorId: (state, action) => {
      state.selectedMentorId = action.payload
    },
    setSelectedCourseId: (state, action) => {
      state.selectedCourseId = action.payload
    },
    setSelectedFacultyId: (state, action) => {
      state.selectedFacultyId = action.payload
    },
  },
})

export const selectLoadingCount = (state) => state[pageSlice.name].loadingCount

export const selectedStudentIdSelector = (state) =>
  state[pageSlice.name].selectedStudentId

export const selectedLecturerIdSelector = (state) =>
  state[pageSlice.name].selectedLecturerId

export const selectedMentorIdSelector = (state) =>
  state[pageSlice.name].selectedMentorId

export const selectedCourseIdSelector = (state) =>
  state[pageSlice.name].selectedCourseId

export const selectedFacultyIdSelector = (state) =>
  state[pageSlice.name].selectedFacultyId

export const {
  loadingStarted,
  loadingDone,
  setSelectedStudentId,
  setSelectedLecturerId,
  setSelectedMentorId,
  setSelectedCourseId,
  setSelectedFacultyId,
} = pageSlice.actions
