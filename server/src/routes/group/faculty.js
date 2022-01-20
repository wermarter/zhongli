import express from 'express'

import {
  createFaculty,
  getFacultyInfo,
  changeFacultyAdmin,
} from '../../controllers/group/faculty.js'

const router = express.Router()

router.post('/', createFaculty)
router.put('/', changeFacultyAdmin)
router.get('/info', getFacultyInfo)

export default router
