import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, selectJWT } from './app/authSlice'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import { ProgressBar } from 'react-bootstrap'
import { selectIsLoading } from './app/pageSlice'

const StudentPage = React.lazy(() => import('./pages/Student'))
const LecturerPage = React.lazy(() => import('./pages/Lecturer'))
const MentorPage = React.lazy(() => import('./pages/Mentor'))
const CoursePage = React.lazy(() => import('./pages/Course'))
const FacultyPage = React.lazy(() => import('./pages/Faculty'))
const NotFoundPage = React.lazy(() => import('./pages/NotFound'))

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = !!useSelector(selectJWT)
  const isLoading = useSelector(selectIsLoading)

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
      <ProgressBar variant="secondary" animated now={isLoading ? 100 : 0} />
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
