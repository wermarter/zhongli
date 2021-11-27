import database from '../../services/database.js'

export const getStudentMentorGroup = async (req, res) => {
  const { studentId } = req.query
  const sql = `
    SELECT "Groups".id as id FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='MENTORGROUP'`
  const result = await database.query(sql, [studentId])
  res.json(result.rows[0])
}

export const getStudentCourses = async (req, res) => {
  const { studentId } = req.query
  const sql = `
    SELECT "Groups".id as id FROM "Groups", "Memberships"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='COURSE'`
  const result = await database.query(sql, [studentId])
  res.json(result.rows)
}
