import database from '../../services/database.js'

export const getStudentMentorGroup = async (req, res) => {
  const { studentId } = req.query
  const sql = `
    SELECT "Groups".id as "groupId", "MentorGroups".mentor_name as "mentorName" FROM "Groups", "Memberships", "MentorGroups"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='MENTORGROUP'
    AND "MentorGroups".group_id="Memberships".group_id`
  const result = await database.query(sql, [studentId])
  res.json(result.rows[0])
}

export const getStudentCourses = async (req, res) => {
  const { studentId } = req.query
  const sql = `
    SELECT "Groups".id as "groupId", "Courses".course_name as "courseName" FROM "Groups", "Memberships", "Courses"
    WHERE "Memberships".user_id=$1
    AND "Memberships".group_id="Groups".id
    AND "Groups".type='COURSE'
    AND "Courses".group_id="Memberships".group_id`
  const result = await database.query(sql, [studentId])
  res.json(result.rows)
}
