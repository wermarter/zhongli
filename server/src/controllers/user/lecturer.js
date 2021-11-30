import database from '../../services/database.js'

export const getLecturerMentorGroup = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as id FROM "MentorGroups"
    WHERE mentor_id=$1`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows[0])
}

export const getLecturerCourses = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as id, course_name as "courseName" FROM "Courses"
    WHERE lecturer_id=$1`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows)
}
