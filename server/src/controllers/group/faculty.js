import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const searchFaculties = async (req, res) => {
  const { query } = req.query
  const searchByGroupId = `
    SELECT group_id as "groupId", name as "facultyName"
    FROM "Faculties"
    WHERE group_id = $1`
  let result
  try {
    result = await database.query(searchByGroupId, [query])
  } catch {
    const searchByCourseName = `
    SELECT group_id as "groupId", name as "facultyName"
    FROM "Faculties"
    WHERE name ILIKE $1`
    result = await database.query(searchByCourseName, [`%${query}%`])
  }
  res.json(result.rows)
}

export const createFaculty = async (req, res) => {
  const { name } = req.body
  const groupId = uuidv4()

  const createNewGroup = `
    INSERT INTO "Groups" ("id", "type")
    VALUES ($1, 'COURSE')`
  await database.query(createNewGroup, [groupId])

  const populateFaculty = `
    INSERT INTO "Faculties" ("group_id", "name")
    VALUES ($1, $2)`
  await database.query(populateFaculty, [groupId, name])

  res.json({ groupId })
}

export const updateFaculty = async (req, res) => {
  const { groupId, name } = req.body
  const sql = `
    UPDATE "Faculties" 
    SET name=$1
    WHERE group_id=$2`
  await database.query(sql, [name, groupId])
  res.sendStatus(200)
}

export const getFacultyInfo = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT group_id as "groupId", name as "facultyName"
    FROM "Faculties"
    WHERE group_id = $1`
  const result = await database.query(sql, [groupId])
  res.json(result.rows[0])
}
