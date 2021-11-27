import database from '../../services/database.js'

export const removeGroup = async (req, res) => {
  const { groupId } = req.query
  const sql = `DELETE FROM "Groups" WHERE id=$1`
  await database.query(sql, [groupId])
  res.sendStatus(200)
}

export const getUsersInGroup = async (req, res) => {
  const { groupId } = req.query
  const sql = `
    SELECT user_id as id
    FROM "Memberships"
    WHERE group_id=$1`
  const result = await database.query(sql, [groupId])
  res.json(result.rows)
}

export const addUserToGroup = async (req, res) => {
  const { userId, groupId } = req.query
  const sql = `
    INSERT INTO "Memberships" ("user_id", "group_id")
    VALUES ($1, $2)`
  await database.query(sql, [userId, groupId])
  res.sendStatus(200)
}

export const removeUserFromGroup = async (req, res) => {
  const { userId, groupId } = req.query
  const sql = `
    DELETE FROM "Memberships"
    WHERE user_id=$1 AND group_id=$2`
  await database.query(sql, [userId, groupId])
  res.sendStatus(200)
}
