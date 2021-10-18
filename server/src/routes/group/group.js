import express from 'express'

import {
  addUserToGroup,
  getUsersInGroup,
  removeGroup,
  removeUserFromGroup,
} from '../../controllers/group/group.js'

const router = express.Router()

router.delete('/', removeGroup)
router.get('/user', getUsersInGroup)
router.post('/user', addUserToGroup)
router.delete('/user', removeUserFromGroup)

export default router
