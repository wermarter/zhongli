import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetStudentCoursesQuery } from '../../../../app/api/user/studentSlice'
import { setIsLoading } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const StudentListCard = ({ selectedStudentId }) => {
  const { data: courses, isFetching } =
    useGetStudentCoursesQuery(selectedStudentId)
  const dispatch = useDispatch()

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
      showKey={false}
      showButton={true}
      handleAdd={() => console.log('Adding new course for student')}
      handleRemove={() => console.log('Removing new course for student')}
    />
  )
}

export default StudentListCard
