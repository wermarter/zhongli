import database from '../../services/database.js'

export const getLecturerMentorGroup = async (req, res) => {
  const { id } = req.body
  const sql = `
    SELECT group_id as id FROM "MentorGroups"
    WHERE mentor_id=$1`
  const result = await database.query(sql, [id])
  res.json(result.rows[0])
}

export const getLecturerCourses = async (req, res) => {
  const { id } = req.body
  const sql = `
    SELECT group_id as id FROM "Courses"
    WHERE lecturer_id=$1`
  const result = await database.query(sql, [id])
  res.json(result.rows)
}
