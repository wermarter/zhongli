import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const createCourse = async (req, res) => {
  const { courseName, timeSlot, lecturerId } = req.body
  const groupId = uuidv4()

  const createNewCourse = `
    INSERT INTO "Groups" ("id", "type", "name")
    VALUES ($1, 'COURSE', $2)`
  await database.query(createNewCourse, [groupId, courseName])

  const populateCourse = `
    INSERT INTO "Courses" ("group_id", "time_slot", "lecturer_id")
    VALUES ($1, $2, $3)`
  await database.query(populateCourse, [groupId, timeSlot, lecturerId])

  res.status(201).json({ groupId })
}

export const changeCourseTimeSlot = async (req, res) => {
  const { groupId, timeSlot } = req.body
  const updateCourseTable = `
    UPDATE "Courses" 
    SET time_slot=$2
    WHERE group_id=$1`
  await database.query(updateCourseTable, [groupId, timeSlot])

  res.sendStatus(200)
}

export const changeCourseLecturerId = async (req, res) => {
  const { groupId, lecturerId } = req.body
  const updateCourseTable = `
    UPDATE "Courses" 
    SET lecturer_id=$2
    WHERE group_id=$1`
  await database.query(updateCourseTable, [groupId, lecturerId])

  res.sendStatus(200)
}

export const getCourseInfo = async (req, res) => {
  const { groupId } = req.query
  const selectCourseInfo = `
    SELECT group_id as "groupId", "Groups".name as "courseName", time_slot as "timeSlot", lecturer_id as "lecturerId"
    FROM "Groups", "Courses"
    WHERE "Courses".group_id = $1
    AND "Groups".id="Courses".group_id`
  const courseInfo = (await database.query(selectCourseInfo, [groupId])).rows[0]

  // Lecturer ID may be null due to deletion
  const { lecturerId } = courseInfo
  let lecturerName = undefined
  if (lecturerId) {
    const selectLecturerName = `
      SELECT name
      FROM "Users"
      WHERE id=$1`
    const user = await database.query(selectLecturerName, [lecturerId])
    lecturerName = user.rows[0].name
  }
  const result = { ...courseInfo, lecturerName }
  res.json(result)
}
