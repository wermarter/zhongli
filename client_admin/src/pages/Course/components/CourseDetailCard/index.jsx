import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetCourseInfoQuery,
  useRemoveCourseMutation,
} from '../../../../app/api/group/courseSlice'
import DetailCard from '../../../../components/DetailCard'
import {
  selectedCourseIdSelector,
  setIsLoading,
  setSelectedCourseId,
} from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/ConfirmationModal'

const CourseDetailCard = () => {
  const selectedCourseId = useSelector(selectedCourseIdSelector)
  const { data: courseInfo, isFetching } =
    useGetCourseInfoQuery(selectedCourseId)
  const [triggerRemoveCourse] = useRemoveCourseMutation()
  const [showRemoveWarning, setShowRemoveWarning] = useState()

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
          { label: 'Group name', content: courseInfo.courseName },
          { label: 'Group ID', content: courseInfo.groupId },
          { label: 'Timeslot', content: courseInfo.timeSlot },
        ]}
        links={[
          {
            label: 'Lecturer',
            content: courseInfo.lecturerName,
            destination: `/lecturer/${courseInfo.lecturerId}`,
          },
        ]}
        buttons={[
          {
            label: 'Edit course name',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Update course timeslot',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Change lecturer',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Remove course',
            onClick: () => {
              setShowRemoveWarning(true)
            },
          },
        ]}
      />
      <ConfirmationModal
        title="Remove course?"
        content="All students will be removed from this course too."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          dispatch(setSelectedCourseId(null))
          await triggerRemoveCourse({ groupId: courseInfo.groupId }).unwrap()
        }}
      />
    </Fragment>
  )
}

export default CourseDetailCard
