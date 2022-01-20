import database from '../../services/database.js'

export const searchGroups = async (req, res) => {
  const { query, groupType } = req.query
  const searchByGroupId = `
    SELECT id as "groupId", name as "groupName"
    FROM "Groups"
    WHERE id = $1
    AND type=$2`
  let result
  try {
    result = await database.query(searchByGroupId, [query, groupType])
  } catch {
    const searchByGroupName = `
      SELECT id as "groupId", name as "groupName"
      FROM "Groups"
      WHERE type=$2
      AND (name ILIKE $1 OR display_id ILIKE $1)
      LIMIT 20`
    result = await database.query(searchByGroupName, [`%${query}%`, groupType])
  }
  res.json(result.rows)
}

export const removeGroup = async (req, res) => {
  const { groupId } = req.query
  const sql = `DELETE FROM "Groups" WHERE id=$1`
  await database.query(sql, [groupId])
  res.sendStatus(204)
}

export const getUsersInGroup = async (req, res) => {
  const { groupId, role } = req.query
  const sql = `
    SELECT user_id as "userId", name as "userName"
    FROM "Memberships", "Users"
    WHERE group_id=$1
    AND id=user_id
    AND role=$2`
  const result = await database.query(sql, [groupId, role])
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

export const changeGroupName = async (req, res) => {
  const { groupId, groupName } = req.body
  const updateGroupName = `
    UPDATE "Groups" 
    SET name=$1
    WHERE id=$2`
  await database.query(updateGroupName, [groupName, groupId])
  res.sendStatus(200)
}

export const changeGroupDisplayId = async (req, res) => {
  const { groupId, displayId } = req.body
  const updateGroupDisplayId = `
    UPDATE "Groups" 
    SET display_id=$1
    WHERE id=$2`
  await database.query(updateGroupDisplayId, [displayId, groupId])
  res.sendStatus(200)
}
