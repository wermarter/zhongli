import express from 'express'
import { verifyToken } from '../controllers/auth.js'

import userRouter from './user/user.js'
import studentRouter from './user/student.js'
import lecturerRouter from './user/lecturer.js'
import groupRouter from './group/group.js'
import mentorRouter from './group/mentor.js'
import courseRouter from './group/course.js'
import facultyRouter from './group/faculty.js'

const router = express.Router()

router.use('/', verifyToken)

router.use('/user', userRouter)
router.use('/student', studentRouter)
router.use('/lecturer', lecturerRouter)
router.use('/group', groupRouter)
router.use('/mentor', mentorRouter)
router.use('/course', courseRouter)
router.use('/faculty', facultyRouter)

export default router
