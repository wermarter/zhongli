import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectJWT } from './app/authSlice'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import { ProgressBar } from 'react-bootstrap'
import { selectLoadingCount } from './app/pageSlice'

import './App.css'
import Login from './pages/Login'

const StudentPage = React.lazy(() => import('./pages/Student'))
const LecturerPage = React.lazy(() => import('./pages/Lecturer'))
const MentorPage = React.lazy(() => import('./pages/Mentor'))
const CoursePage = React.lazy(() => import('./pages/Course'))
const FacultyPage = React.lazy(() => import('./pages/Faculty'))
const NotFoundPage = React.lazy(() => import('./pages/NotFound'))

function RequireAuth({ children }) {
  const isAuthenticated = !!useSelector(selectJWT)
  let location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

function App() {
  const isLoading = useSelector(selectLoadingCount) > 0

  return (
    <Fragment>
      <NavigationBar />
      <ProgressBar variant="secondary" animated now={isLoading ? 100 : 0} />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Navigate replace to="/student" />
            </RequireAuth>
          }
        />
        <Route
          path="student/*"
          element={
            <RequireAuth>
              <StudentPage />
            </RequireAuth>
          }
        />
        <Route
          path="lecturer/*"
          element={
            <RequireAuth>
              <LecturerPage />
            </RequireAuth>
          }
        />
        <Route
          path="mentor/*"
          element={
            <RequireAuth>
              <MentorPage />
            </RequireAuth>
          }
        />
        <Route
          path="course/*"
          element={
            <RequireAuth>
              <CoursePage />
            </RequireAuth>
          }
        />
        <Route
          path="faculty/*"
          element={
            <RequireAuth>
              <FacultyPage />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  )
}

export default App
