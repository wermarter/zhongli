import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  selectedStudentId: null,
  selectedLecturerId: null,
  selectedMentorId: null,
  selectedCourseId: null,
  selectedFacultyId: null,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
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

export const selectIsLoading = (state) => state[pageSlice.name].isLoading

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
  setIsLoading,
  setSelectedStudentId,
  setSelectedLecturerId,
  setSelectedMentorId,
  setSelectedCourseId,
  setSelectedFacultyId,
} = pageSlice.actions
