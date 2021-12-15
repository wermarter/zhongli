import { useGetCourseStudentsQuery } from '../../../../app/api/group/courseSlice'
import {
  useAddStudentCourseMutation,
  useRemoveStudentCourseMutation,
  useSearchStudentsMutation,
} from '../../../../app/api/user/studentSlice'
import ListCard from '../../../../components/ListCard'

const CourseListCard = ({ selectedCourseId }) => {
  const { data: students, isFetching } =
    useGetCourseStudentsQuery(selectedCourseId)
  const [triggerRemoveStudent] = useRemoveStudentCourseMutation()
  const [triggerAddStudent] = useAddStudentCourseMutation()
  const [triggerSearchStudent] = useSearchStudentsMutation()

  if (isFetching) {
    return <></>
  }

  return (
    <ListCard
      label="Student"
      items={students}
      keySelector={(student) => student.userId}
      nameSelector={(student) => student.userName}
      linkSelector={(student) => `/student/${student.userId}`}
      showButtons={true}
      handleRemove={async (student) => {
        await triggerRemoveStudent({
          userId: student.userId,
          groupId: selectedCourseId,
        }).unwrap()
      }}
      handleAdd={async (studentId) => {
        await triggerAddStudent({
          userId: studentId,
          groupId: selectedCourseId,
        }).unwrap()
      }}
      handleSearchItems={async (query) => {
        const students = await triggerSearchStudent(query).unwrap()
        return students.map((student) => ({
          value: student.id,
          label: student.name,
        }))
      }}
    />
  )
}

export default CourseListCard
