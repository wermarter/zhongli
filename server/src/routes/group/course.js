import express from 'express'

import {
  createCourse,
  getCourseInfo,
  searchCourses,
  updateCourse,
} from '../../controllers/group/course.js'

const router = express.Router()

router.get('/', searchCourses)
router.post('/', createCourse)
router.put('/', updateCourse)
router.get('/info', getCourseInfo)

export default router
