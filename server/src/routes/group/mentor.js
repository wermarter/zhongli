import express from 'express'

import {
  searchMentorsById,
  searchMentorsByName,
  getSomeMentors,
  assignMentor,
  changeMentor,
} from '../../controllers/group/mentor.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const { name, id } = req.query

  if (name !== undefined) {
    await searchMentorsByName(req, res)
  } else if (id !== undefined) {
    await searchMentorsById(req, res)
  } else {
    await getSomeMentors(req, res)
  }
})

router.post('/', assignMentor)
router.put('/', changeMentor)

export default router
