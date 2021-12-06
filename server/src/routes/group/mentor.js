import express from 'express'

import {
  createMentorGroup,
  updateMentorGroup,
  getMentorGroupInfo,
} from '../../controllers/group/mentor.js'

const router = express.Router()

router.post('/', createMentorGroup)
router.put('/', updateMentorGroup)
router.get('/info', getMentorGroupInfo)

export default router
