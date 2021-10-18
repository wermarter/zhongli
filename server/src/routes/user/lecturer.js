import express from 'express'

import {
  getLecturerMentorGroup,
  getLecturerCourses,
} from '../../controllers/user/lecturer.js'

const router = express.Router()

router.get('/mentor', getLecturerMentorGroup)
router.get('/course', getLecturerCourses)

export default router
