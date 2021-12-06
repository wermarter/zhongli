import database from '../../services/database.js'

export const getLecturerMentorGroups = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as "groupId", name as "groupName"
    FROM "MentorGroups", "Groups"
    WHERE mentor_id=$1
    AND "MentorGroups".group_id="Groups".id`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows)
}

export const getLecturerCourses = async (req, res) => {
  const { lecturerId } = req.query
  const sql = `
    SELECT group_id as "groupId", "Groups".name as "courseName" 
    FROM "Courses", "Groups"
    WHERE lecturer_id=$1
    AND "Courses".group_id="Groups".id`
  const result = await database.query(sql, [lecturerId])
  res.json(result.rows)
}
