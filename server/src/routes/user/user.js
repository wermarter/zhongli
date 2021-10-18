import express from 'express'

import {
  searchUsersByName,
  searchUsersById,
  getSomeUsers,
  createUser,
  updateUser,
  removeUser,
  getUserFaculty,
} from '../../controllers/user/user.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const { name, id } = req.body

  if (name !== undefined) {
    await searchUsersByName(req, res)
  } else if (id !== undefined) {
    await searchUsersById(req, res)
  } else {
    await getSomeUsers(req, res)
  }
})

router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', removeUser)
router.get('/faculty', getUserFaculty)

export default router
