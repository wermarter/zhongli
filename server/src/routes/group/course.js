import express from 'express'

import {
  changeCourseLecturerId,
  createCourse,
  getCourseInfo,
  updateCourseTimeSlot,
} from '../../controllers/group/course.js'

const router = express.Router()

router.post('/', createCourse)
router.put('/timeslot', updateCourseTimeSlot)
router.put('/lecturer', changeCourseLecturerId)
router.get('/info', getCourseInfo)

export default router
