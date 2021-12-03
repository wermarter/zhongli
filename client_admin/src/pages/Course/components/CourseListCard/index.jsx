import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetCourseStudentsQuery } from '../../../../app/api/group/courseSlice'
import { setIsLoading } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const CourseListCard = ({ selectedCourseId }) => {
  const { data: students, isFetching } =
    useGetCourseStudentsQuery(selectedCourseId)
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
      label="Student"
      items={students}
      keySelector={(student) => student.userId}
      nameSelector={(student) => student.userName}
      linkSelector={(student) => `/student/${student.userId}`}
      showButtons={true}
      handleAdd={() => console.log('Adding student to course')}
      handleRemove={() => console.log('Removing student from course')}
    />
  )
}

export default CourseListCard
