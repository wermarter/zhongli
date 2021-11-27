import bcrypt from 'bcrypt'

import config from '../../config.js'
import database from '../../services/database.js'

export const searchUsersByName = async (req, res) => {
  const { name, role } = req.query
  const sql = `
    SELECT id, name
    FROM "Users"
    WHERE role=$1
    AND name ILIKE $2`
  const result = await database.query(sql, [role, `%${name}%`])
  res.json(result.rows)
}

export const searchUsersById = async (req, res) => {
  const { id, role } = req.query
  const sql = `
    SELECT id, name
    FROM "Users"
    WHERE role=$1
    AND id ILIKE $2`
  const result = await database.query(sql, [role, `%${id}%`])
  res.json(result.rows)
}

export const getSomeUsers = async (req, res) => {
  const { role } = req.query
  const sql = `
    SELECT id, name
    FROM "Users"
    WHERE role=$1
    LIMIT 10`
  const result = await database.query(sql, [role])
  res.json(result.rows)
}

export const createUser = async (req, res) => {
  const { id, name, password, role } = req.body
  const hashedPassword = await bcrypt.hash(password, config.saltRounds)
  const sql = `
    INSERT INTO "Users" ("id", "name", "password", "role")
    VALUES ($1, $2, $3, $4)`
  await database.query(sql, [id, name, hashedPassword, role])
  res.sendStatus(201)
}

export const updateUser = async (req, res) => {
  const { id, name, password, role } = req.body
  if (password != undefined && password?.length !== 0) {
    const hashedPassword = await bcrypt.hash(password, config.saltRounds)
    const sql = `
      UPDATE "Users" SET name=$1, password=$2 WHERE id=$3 AND role=$4`
    await database.query(sql, [name, hashedPassword, id, role])
    res.sendStatus(200)
  } else {
    const sql = `
      UPDATE "Users" SET name=$1 WHERE id=$2 AND role=$3`
    await database.query(sql, [name, id, role])
    res.sendStatus(200)
  }
}

export const removeUser = async (req, res) => {
  const { userId } = req.query
  const sql = `DELETE FROM "Users" WHERE id=$1`
  await database.query(sql, [userId])
  res.sendStatus(200)
}

export const getUserFaculty = async (req, res) => {
  const { userId } = req.query
  const sql = `
    SELECT "Groups".id as id FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='FACULTY'`
  const result = await database.query(sql, [userId])
  res.json(result.rows[0])
}
