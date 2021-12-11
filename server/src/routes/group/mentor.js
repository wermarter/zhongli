import express from 'express'

import {
  changeMentorId,
  createMentorGroup,
  getMentorGroupInfo,
} from '../../controllers/group/mentor.js'

const router = express.Router()

router.post('/', createMentorGroup)
router.put('/', changeMentorId)
router.get('/info', getMentorGroupInfo)

export default router
