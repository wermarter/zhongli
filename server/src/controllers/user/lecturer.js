import database from '../../services/database.js'

export const getLecturerMentorGroups = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as "groupId", name FROM "MentorGroups"
    WHERE mentor_id=$1`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows)
}

export const getLecturerCourses = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as "groupId", course_name as "courseName" FROM "Courses"
    WHERE lecturer_id=$1`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows)
}
