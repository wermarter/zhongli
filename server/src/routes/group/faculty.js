import express from 'express'

import {
  createFaculty,
  getFacultyInfo,
  searchFaculties,
  updateFaculty,
} from '../../controllers/group/faculty.js'

const router = express.Router()

router.get('/', searchFaculties)
router.post('/', createFaculty)
router.put('/', updateFaculty)
router.get('/info', getFacultyInfo)

export default router
