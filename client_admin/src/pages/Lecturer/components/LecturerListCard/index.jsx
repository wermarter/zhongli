import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetLecturerCoursesQuery } from '../../../../app/api/user/lecturerSlice'
import { setIsLoading } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const LecturerListCard = ({ selectedLecturerId }) => {
  const { data: courses, isFetching } =
    useGetLecturerCoursesQuery(selectedLecturerId)
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
      showButtons={false}
    />
  )
}

export default LecturerListCard
