import express from 'express'

import {
  searchUsers,
  createUser,
  updateUser,
  removeUser,
  getUserFaculty,
} from '../../controllers/user/user.js'

const router = express.Router()

router.get('/', searchUsers)

router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', removeUser)
router.get('/faculty', getUserFaculty)

export default router
