import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const searchMentors = async (req, res) => {
  const { query } = req.query
  let result
  const searchByGroupId = `
  SELECT mentor_name as "mentorName", group_id as "groupId"
    FROM "MentorGroups"
    WHERE group_id = $1
  `
  try {
    result = await database.query(searchByGroupId, [query])
  } catch {
    const sql = `
      SELECT mentor_name as "mentorName", group_id as "groupId"
      FROM "MentorGroups"
      WHERE (mentor_id ILIKE $1 OR mentor_name ILIKE $1 OR name ILIKE $1) LIMIT 20`
    result = await database.query(sql, [`%${query}%`])
  }
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

export const getMentorGroupInfo = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT mentor_id as "mentorId", mentor_name as "mentorName", group_id as "groupId", name
    FROM "MentorGroups"
    WHERE group_id = $1`
  const result = await database.query(sql, [groupId])
  res.json(result.rows[0])
}
