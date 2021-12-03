import express from 'express'

import {
  searchUsers,
  createUser,
  updateUser,
  removeUser,
  getUserFaculty,
  getUserInfo,
} from '../../controllers/user/user.js'

const router = express.Router()

router.get('/', searchUsers)

router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', removeUser)
router.get('/faculty', getUserFaculty)
router.get('/info', getUserInfo)

export default router
