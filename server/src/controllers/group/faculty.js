import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const getAllFaculty = async (req, res) => {
  const sql = `
    SELECT group_id as "groupId", name FROM "Faculties"`
  const result = await database.query(sql)
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
