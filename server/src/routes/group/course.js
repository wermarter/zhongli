import express from 'express'

import {
  createCourse,
  getSomeCourses,
  searchCourses,
  updateCourse,
} from '../../controllers/group/course.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const { query } = req.query
  if (query !== undefined) {
    await searchCourses(req, res)
  } else {
    await getSomeCourses(req, res)
  }
})

router.post('/', createCourse)
router.put('/', updateCourse)

export default router
