import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const createFaculty = async (req, res) => {
  const { facultyName, facultyDescription } = req.body
  const groupId = uuidv4()

  const createNewGroup = `
    INSERT INTO "Groups" ("id", "type", "name")
    VALUES ($1, 'COURSE', $2)`
  await database.query(createNewGroup, [groupId, facultyName])

  const populateFaculty = `
    INSERT INTO "Faculties" ("group_id", "description")
    VALUES ($1, $2)`
  await database.query(populateFaculty, [groupId, facultyDescription])

  res.json({ groupId })
}

export const updateFaculty = async (req, res) => {
  const { groupId, facultyName, facultyDescription } = req.body
  if (facultyName) {
    const updateFacultyName = `
      UPDATE "Groups" 
      SET name=$1
      WHERE type='FACULTY'
      AND id=$2`
    await database.query(updateFacultyName, [facultyName, groupId])
  }
  const updateFacultyTable = `
    UPDATE "Faculties" 
    SET description=$1
    WHERE group_id=$2`
  await database.query(updateFacultyTable, [facultyDescription, groupId])
  res.sendStatus(200)
}

export const getFacultyInfo = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT group_id as "groupId", "Groups".name as "facultyName", description as "facultyDescription"
    FROM "Faculties", "Groups"
    WHERE "Faculties".group_id=$1
    AND "Faculties".group_id="Groups".id`
  const result = await database.query(sql, [groupId])
  res.json(result.rows[0] || {})
}
