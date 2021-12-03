import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetCourseInfoQuery } from '../../../../app/api/group/courseSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const CourseDetailCard = ({ selectedCourseId }) => {
  const { data: courseInfo, isFetching } =
    useGetCourseInfoQuery(selectedCourseId)

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
    <DetailCard
      label="Course"
      fields={[
        { label: 'Name', content: courseInfo.courseName },
        { label: 'ID', content: courseInfo.groupId },
        { label: 'Timeslot', content: courseInfo.timeSlot },
      ]}
      buttons={[
        {
          label: 'Edit',
          onClick: () => {
            console.log('Editing course')
          },
        },
        {
          label: 'Del',
          onClick: () => {
            console.log('Removing course')
          },
        },
      ]}
      links={[
        {
          label: 'Lecturer',
          content: courseInfo.lecturerName,
          destination: `/lecturer/${courseInfo.lecturerId}`,
        },
      ]}
    />
  )
}

export default CourseDetailCard
