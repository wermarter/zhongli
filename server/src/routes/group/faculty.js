import express from 'express'

import {
  createFaculty,
  getAllFaculty,
  updateFaculty,
} from '../../controllers/group/faculty.js'

const router = express.Router()

router.get('/', getAllFaculty)
router.post('/', createFaculty)
router.put('/', updateFaculty)

export default router
