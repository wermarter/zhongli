import express from 'express'

import {
  changeCourseLecturerId,
  createCourse,
  getCourseInfo,
  changeCourseTimeSlot,
} from '../../controllers/group/course.js'

const router = express.Router()

router.post('/', createCourse)
router.put('/timeslot', changeCourseTimeSlot)
router.put('/lecturer', changeCourseLecturerId)
router.get('/info', getCourseInfo)

export default router
