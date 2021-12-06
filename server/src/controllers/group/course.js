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

  res.json({ groupId })
}

export const updateCourse = async (req, res) => {
  const { groupId, courseName, timeSlot, lecturerId } = req.body
  if (courseName) {
    const updateCourseName = `
      UPDATE "Groups" 
      SET name=$1
      WHERE type='COURSE'
      AND id=$2`
    await database.query(updateCourseName, [courseName, groupId])
  }
  const updateCourseTable = `
    UPDATE "Courses" 
    SET time_slot=$2, lecturer_id=$3
    WHERE group_id=$1`
  await database.query(updateCourseTable, [groupId, timeSlot, lecturerId])

  res.sendStatus(200)
}

export const getCourseInfo = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT group_id as "groupId", "Groups".name as "courseName", time_slot as "timeSlot", lecturer_id as "lecturerId", "Users".name as "lecturerName"
    FROM "Groups", "Courses", "Users"
    WHERE "Courses".group_id = $1
    AND "Groups".id="Courses".group_id
    AND "Users".id="Courses".lecturer_id`
  const result = await database.query(sql, [groupId])
  res.json(result.rows[0] || {})
}
