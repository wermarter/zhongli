import express from 'express'

import {
  createCourse,
  getSomeCourses,
  searchCoursesByName,
  updateCourse,
} from '../../controllers/group/course.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const { name } = req.body
  if (name !== undefined) {
    await searchCoursesByName(req, res)
  } else {
    await getSomeCourses(req, res)
  }
})

router.post('/', createCourse)
router.put('/', updateCourse)

export default router
