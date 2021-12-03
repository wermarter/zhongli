import express from 'express'

import {
  getLecturerMentorGroups,
  getLecturerCourses,
} from '../../controllers/user/lecturer.js'

const router = express.Router()

router.get('/mentor', getLecturerMentorGroups)
router.get('/course', getLecturerCourses)

export default router
