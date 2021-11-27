import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const searchMentorsById = async (req, res) => {
  const { id } = req.query
  const sql = `
    SELECT mentor_id as "mentorId", mentor_name as "mentorName", group_id as "groupId"
    FROM "MentorGroups"
    WHERE mentor_id ILIKE $1`
  const result = await database.query(sql, [`%${id}%`])
  res.json(result.rows)
}

export const searchMentorsByName = async (req, res) => {
  const { name } = req.query
  const sql = `
  SELECT mentor_id as "mentorId", mentor_name as "mentorName", group_id as "groupId"
    FROM "MentorGroups"
    WHERE mentor_name ILIKE $1`
  const result = await database.query(sql, [`%${name}%`])
  res.json(result.rows)
}

export const getSomeMentors = async (req, res) => {
  const sql = `
  SELECT mentor_id as "mentorId", mentor_name as "mentorName", group_id as "groupId"
    FROM "MentorGroups" LIMIT 10`
  const result = await database.query(sql)
  res.json(result.rows)
}

export const assignMentor = async (req, res) => {
  const { lecturerId, lecturerName } = req.body
  const groupId = uuidv4()

  const createNewGroup = `
    INSERT INTO "Groups" ("id", "type")
    VALUES ($1, 'MENTORGROUP')`
  await database.query(createNewGroup, [groupId])

  const populateMentorGroup = `
    INSERT INTO "MentorGroups" ("group_id", "mentor_id", "mentor_name")
    VALUES ($1, $2, $3)`
  await database.query(populateMentorGroup, [groupId, lecturerId, lecturerName])

  res.json({ groupId })
}

export const changeMentor = async (req, res) => {
  const { groupId, mentorId, mentorName } = req.body
  const sql = `
    UPDATE "MentorGroups" SET mentor_id=$1, mentor_name=$2 WHERE group_id=$3`
  await database.query(sql, [mentorId, mentorName, groupId])
  res.sendStatus(200)
}
