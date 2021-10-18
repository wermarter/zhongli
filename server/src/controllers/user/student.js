import database from '../../services/database.js'

export const getStudentMentorGroup = async (req, res) => {
  const { id } = req.body
  const sql = `
    SELECT "Groups".id as id FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='MENTORGROUP'`
  const result = await database.query(sql, [id])
  res.json(result.rows[0])
}

export const getStudentCourses = async (req, res) => {
  const { id } = req.body
  const sql = `
    SELECT "Groups".id as id FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='COURSE'`
  const result = await database.query(sql, [id])
  res.json(result.rows)
}
