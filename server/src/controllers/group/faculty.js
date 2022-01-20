import { v4 as uuidv4 } from 'uuid'

import database from '../../services/database.js'

export const createFaculty = async (req, res) => {
  const { facultyName, displayId } = req.body
  const groupId = uuidv4()

  const createNewGroup = `
    INSERT INTO "Groups" ("id", "type", "name", "display_id")
    VALUES ($1, 'FACULTY', $2, $3)`
  await database.query(createNewGroup, [groupId, facultyName, displayId])

  const populateFaculty = `
    INSERT INTO "Faculties" ("group_id") VALUES ($1)`
  await database.query(populateFaculty, [groupId])

  res.status(201).json({ groupId })
}

export const changeFacultyAdmin = async (req, res) => {
  const { groupId, adminId } = req.body
  const updateFacultyTable = `
    UPDATE "Faculties" 
    SET admin_id=$1
    WHERE group_id=$2`
  await database.query(updateFacultyTable, [adminId, groupId])
  res.sendStatus(200)
}

export const getFacultyInfo = async (req, res) => {
  const { groupId } = req.query
  const selectFacultyInfo = `
    SELECT group_id as "groupId", display_id as "displayId", "Groups".name as "facultyName", admin_id as "adminId"
    FROM "Groups", "Faculties"
    WHERE "Faculties".group_id = $1
    AND "Groups".id="Faculties".group_id`
  const facultyInfo = (await database.query(selectFacultyInfo, [groupId]))
    .rows[0]

  // Admin ID may be null due to deletion
  const { adminId } = facultyInfo
  let adminName = undefined
  if (adminId) {
    const selectAdminName = `
      SELECT name
      FROM "Users"
      WHERE id=$1`
    const user = await database.query(selectAdminName, [adminId])
    adminName = user.rows[0].name
  }
  const result = { ...facultyInfo, adminName }
  res.json(result)
}
