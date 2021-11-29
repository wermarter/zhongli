import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const searchCourses = async (req, res) => {
  const { query } = req.query
  const searchByGroupId = `
    SELECT group_id as "groupId", course_name as "courseName", time_slot as "timeSlot", lecturer_id as "lecturerId"
    FROM "Courses"
    WHERE group_id = $1`
  let result
  try {
    result = await database.query(searchByGroupId, [query])
  } catch {
    const searchByCourseName = `
    SELECT group_id as "groupId", course_name as "courseName", time_slot as "timeSlot", lecturer_id as "lecturerId"
    FROM "Courses"
    WHERE course_name ILIKE $1`
    result = await database.query(searchByCourseName, [`%${query}%`])
  }
  res.json(result.rows)
}

export const getSomeCourses = async (req, res) => {
  const sql = `
  SELECT group_id as "groupId", course_name as "courseName", time_slot as "timeSlot", lecturer_id as "lecturerId"
    FROM "Courses"`
  const result = await database.query(sql)
  res.json(result.rows)
}

export const createCourse = async (req, res) => {
  const { courseName, timeSlot, lecturerId } = req.body
  const groupId = uuidv4()

  const createNewGroup = `
    INSERT INTO "Groups" ("id", "type")
    VALUES ($1, 'COURSE')`
  await database.query(createNewGroup, [groupId])

  const populateCourse = `
    INSERT INTO "Courses" ("group_id", "course_name", "time_slot", "lecturer_id")
    VALUES ($1, $2, $3, $4)`
  await database.query(populateCourse, [
    groupId,
    courseName,
    timeSlot,
    lecturerId,
  ])

  res.json({ groupId })
}

export const updateCourse = async (req, res) => {
  const { groupId, courseName, timeSlot, lecturerId } = req.body
  const sql = `
    UPDATE "Courses" 
    SET course_name=$1, time_slot=$2, lecturer_id=$3
    WHERE group_id=$4`
  await database.query(sql, [courseName, timeSlot, lecturerId, groupId])
  res.sendStatus(200)
}
