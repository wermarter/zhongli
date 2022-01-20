import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import config from '../../config.js'
import database from '../../services/database.js'

export const searchUsers = async (req, res) => {
  const { role, query } = req.query
  const sql = `
    SELECT id, name
    FROM "Users"
    WHERE role=$1
    AND (name ILIKE $2 OR display_id ILIKE $2) LIMIT 20`
  const result = await database.query(sql, [role, `%${query}%`])
  res.json(result.rows)
}

export const createUser = async (req, res) => {
  const { name, password, role, address, facultyId, displayId } = req.body
  const userId = uuidv4()
  const hashedPassword = await bcrypt.hash(password, config.saltRounds)
  const createNewUser = `
    INSERT INTO "Users" ("id", "name", "password", "role", "address", "display_id")
    VALUES ($1, $2, $3, $4, $5, $6)`
  await database.query(createNewUser, [
    userId,
    name,
    hashedPassword,
    role,
    address,
    displayId,
  ])
  if (facultyId) {
    const assignFaculty = `
      INSERT INTO "Memberships" ("user_id", "group_id")
      VALUES ($1, $2)`
    await database.query(assignFaculty, [userId, facultyId])
  }

  res.status(201).json({ userId })
}

export const updateUser = async (req, res) => {
  const { id, name, address, displayId } = req.body
  const sql = `
    UPDATE "Users" SET name=$1, address=$2, display_id=$4 WHERE id=$3`
  await database.query(sql, [name, address, id, displayId])
  res.sendStatus(200)
}

export const changePassword = async (req, res) => {
  const { userId, password } = req.body
  const hashedPassword = await bcrypt.hash(password, config.saltRounds)
  const sql = `
    UPDATE "Users" SET password=$1 WHERE id=$2`
  await database.query(sql, [hashedPassword, userId])
  res.sendStatus(200)
}

export const removeUser = async (req, res) => {
  const { userId } = req.query
  const sql = `DELETE FROM "Users" WHERE id=$1`
  await database.query(sql, [userId])
  res.sendStatus(204)
}

export const getUserFaculty = async (req, res) => {
  const { userId } = req.query
  const sql = `
    SELECT "Groups".id as "groupId", "Groups".name as "facultyName" 
    FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='FACULTY'`
  const result = await database.query(sql, [userId])
  res.json(result.rows[0] || {})
}

export const changeUserGroup = async (req, res) => {
  const { userId, currentGroupId, newGroupId } = req.body
  if (currentGroupId) {
    const removeOldGroup = `
      DELETE FROM "Memberships"
      WHERE user_id=$1 AND group_id=$2`
    await database.query(removeOldGroup, [userId, currentGroupId])
  }
  const addNewGroup = `
    INSERT INTO "Memberships" ("user_id", "group_id")
    VALUES ($1, $2)`
  await database.query(addNewGroup, [userId, newGroupId])
  res.sendStatus(200)
}

export const getUserInfo = async (req, res) => {
  const { userId } = req.query
  const sql = `
    SELECT id, psid, name, role, address, display_id as "displayId"
    FROM "Users"
    WHERE id=$1`
  const result = await database.query(sql, [userId])
  res.json(result.rows[0] || {})
}
