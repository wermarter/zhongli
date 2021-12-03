import express from 'express'

import {
  searchMentors,
  assignMentor,
  changeMentor,
  getMentorGroupInfo,
} from '../../controllers/group/mentor.js'

const router = express.Router()

router.get('/', searchMentors)
router.post('/', assignMentor)
router.put('/', changeMentor)
router.get('/info', getMentorGroupInfo)

export default router
