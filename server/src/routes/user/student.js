import express from 'express'

import {
  getStudentMentorGroup,
  getStudentCourses,
} from '../../controllers/user/student.js'

const router = express.Router()

router.get('/mentor', getStudentMentorGroup)
router.get('/course', getStudentCourses)

export default router
