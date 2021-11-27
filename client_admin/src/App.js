import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, selectJWT } from './app/authSlice'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import StudentPage from './pages/Student'
import LecturerPage from './pages/Lecturer'
import MentorPage from './pages/Mentor'
import CoursePage from './pages/Course'
import FacultyPage from './pages/Faculty'
import NotFoundPage from './pages/NotFound'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = !!useSelector(selectJWT)

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(adminLogin())
    }
  }, [isAuthenticated, dispatch])

  if (!isAuthenticated) {
    return <h3>Logging in as admin...</h3>
  }

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/student" />} />
        <Route path="student/*" element={<StudentPage />} />
        <Route path="lecturer/*" element={<LecturerPage />} />
        <Route path="mentor/*" element={<MentorPage />} />
        <Route path="course/*" element={<CoursePage />} />
        <Route path="faculty/*" element={<FacultyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
