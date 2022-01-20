import express from 'express'

import {
  addUserToGroup,
  getUsersInGroup,
  removeGroup,
  removeUserFromGroup,
  searchGroups,
  changeGroupName,
  changeGroupDisplayId,
} from '../../controllers/group/group.js'

const router = express.Router()

router.get('/', searchGroups)
router.put('/name', changeGroupName)
router.put('/displayId', changeGroupDisplayId)
router.delete('/', removeGroup)
router.get('/user', getUsersInGroup)
router.post('/user', addUserToGroup)
router.delete('/user', removeUserFromGroup)

export default router
