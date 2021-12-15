import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const createMentorGroup = async (req, res) => {
  const { mentorId, groupName } = req.body
  const groupId = uuidv4()

  const createNewMentorGroup = `
    INSERT INTO "Groups" ("id", "type", "name")
    VALUES ($1, 'MENTORGROUP', $2)`
  await database.query(createNewMentorGroup, [groupId, groupName])

  const populateMentorGroup = `
    INSERT INTO "MentorGroups" ("group_id", "mentor_id")
    VALUES ($1, $2)`
  await database.query(populateMentorGroup, [groupId, mentorId])

  res.status(201).json({ groupId })
}

export const changeMentorId = async (req, res) => {
  const { groupId, mentorId } = req.body
  const updateMentorTable = `
    UPDATE "MentorGroups" SET mentor_id=$1 WHERE group_id=$2`
  await database.query(updateMentorTable, [mentorId, groupId])
  res.sendStatus(200)
}

export const getMentorGroupInfo = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT mentor_id as "mentorId", group_id as "groupId", "Groups".name as "groupName"
    FROM "MentorGroups", "Groups"
    WHERE "MentorGroups".group_id=$1
    AND "MentorGroups".group_id="Groups".id`
  const groupInfo = (await database.query(sql, [groupId])).rows[0]
  const { mentorId } = groupInfo
  let mentorName = undefined

  // Mentor ID may be null due to deletion
  if (mentorId) {
    const selectMentorName = `
      SELECT name
      FROM "Users"
      WHERE id=$1`
    const user = await database.query(selectMentorName, [mentorId])
    mentorName = user.rows[0].name
  }
  const result = { ...groupInfo, mentorName }
  res.json(result)
}
