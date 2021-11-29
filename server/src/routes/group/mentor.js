import express from 'express'

import {
  searchMentors,
  assignMentor,
  changeMentor,
} from '../../controllers/group/mentor.js'

const router = express.Router()

router.get('/', searchMentors)

router.post('/', assignMentor)
router.put('/', changeMentor)

export default router
