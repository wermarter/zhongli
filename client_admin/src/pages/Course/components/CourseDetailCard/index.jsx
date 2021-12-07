import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetCourseInfoQuery,
  useRemoveCourseMutation,
} from '../../../../app/api/group/courseSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/ConfirmationModal'

const CourseDetailCard = ({ selectedCourseId }) => {
  const { data: courseInfo, isFetching } =
    useGetCourseInfoQuery(selectedCourseId)
  const [triggerRemoveCourse] = useRemoveCourseMutation()
  const [showRemoveWarning, setshowRemoveWarning] = useState()

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
    <Fragment>
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
            label: 'Remove course',
            onClick: () => {
              setshowRemoveWarning(true)
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
      <ConfirmationModal
        title="Remove course?"
        content="All students will be removed from this course too."
        show={showRemoveWarning}
        handleClose={() => setshowRemoveWarning(false)}
        handleSubmit={async () =>
          await triggerRemoveCourse({ groupId: courseInfo.groupId }).unwrap()
        }
        navigateTo="/course/deleted"
      />
    </Fragment>
  )
}

export default CourseDetailCard
