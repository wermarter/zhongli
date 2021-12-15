import { useSearchCoursesMutation } from '../../../../app/api/group/courseSlice'
import {
  useAddStudentCourseMutation,
  useGetStudentCoursesQuery,
  useRemoveStudentCourseMutation,
} from '../../../../app/api/user/studentSlice'
import ListCard from '../../../../components/ListCard'

const StudentListCard = ({ selectedStudentId }) => {
  const { data: courses, isFetching } =
    useGetStudentCoursesQuery(selectedStudentId)
  const [triggerRemoveCourse] = useRemoveStudentCourseMutation()
  const [triggerAddCourse] = useAddStudentCourseMutation()
  const [triggerSearchCourse] = useSearchCoursesMutation()

  if (isFetching) {
    return <></>
  }

  return (
    <ListCard
      label="Course"
      items={courses}
      keySelector={(course) => course.groupId}
      nameSelector={(course) => course.courseName}
      linkSelector={(course) => `/course/${course.groupId}`}
      showButtons={true}
      handleRemove={async (course) => {
        await triggerRemoveCourse({
          userId: selectedStudentId,
          groupId: course.groupId,
        }).unwrap()
      }}
      handleAdd={async (groupId) => {
        await triggerAddCourse({
          userId: selectedStudentId,
          groupId: groupId,
        }).unwrap()
      }}
      handleSearchItems={async (query) => {
        const courses = await triggerSearchCourse(query).unwrap()
        return courses.map((course) => ({
          value: course.groupId,
          label: course.groupName,
        }))
      }}
    />
  )
}

export default StudentListCard
