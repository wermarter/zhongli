import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  useAddStudentCourseMutation,
  useGetStudentCoursesQuery,
  useRemoveStudentCourseMutation,
} from '../../../../app/api/user/studentSlice'
import { useSearchCoursesMutation } from '../../../../app/api/group/courseSlice'
import { setIsLoading } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const StudentListCard = ({ selectedStudentId }) => {
  const { data: courses, isFetching } =
    useGetStudentCoursesQuery(selectedStudentId)
  const dispatch = useDispatch()
  const [triggerRemoveCourse] = useRemoveStudentCourseMutation()
  const [triggerAddCourse] = useAddStudentCourseMutation()
  const [triggerSearchCourse] = useSearchCoursesMutation()

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

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
