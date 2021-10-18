import database from '../../services/database.js'

export const removeGroup = async (req, res) => {
  const { id } = req.body
  const sql = `DELETE FROM "Groups" WHERE id=$1`
  await database.query(sql, [id])
  res.sendStatus(200)
}

export const getUsersInGroup = async (req, res) => {
  const { id } = req.body
  const sql = `
    SELECT user_id as id
    FROM "Memberships"
    WHERE group_id=$1`
  const result = await database.query(sql, [id])
  res.json(result.rows)
}

export const addUserToGroup = async (req, res) => {
  const { userId, groupId } = req.body
  const sql = `
    INSERT INTO "Memberships" ("user_id", "group_id")
    VALUES ($1, $2)`
  await database.query(sql, [userId, groupId])
  res.sendStatus(200)
}

export const removeUserFromGroup = async (req, res) => {
  const { userId, groupId } = req.body
  const sql = `
    DELETE FROM "Memberships"
    WHERE user_id=$1 AND group_id=$2`
  await database.query(sql, [userId, groupId])
  res.sendStatus(200)
}
