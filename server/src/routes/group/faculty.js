import express from 'express'

import {
  createFaculty,
  getFacultyInfo,
  updateFaculty,
} from '../../controllers/group/faculty.js'

const router = express.Router()

router.post('/', createFaculty)
router.put('/', updateFaculty)
router.get('/info', getFacultyInfo)

export default router
