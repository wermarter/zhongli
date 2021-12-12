import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useChangeCourseLecturerMutation,
  useChangeCourseNameMutation,
  useChangeCourseTimeSlotMutation,
  useGetCourseInfoQuery,
  useRemoveCourseMutation,
} from '../../../../app/api/group/courseSlice'
import DetailCard from '../../../../components/DetailCard'
import {
  selectedCourseIdSelector,
  setIsLoading,
  setSelectedCourseId,
} from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'
import EditFieldModal from '../../../../components/modals/EditFieldModal'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'

const CourseDetailCard = () => {
  const selectedCourseId = useSelector(selectedCourseIdSelector)
  const { data: courseInfo, isFetching } =
    useGetCourseInfoQuery(selectedCourseId)
  const [triggerRemoveCourse] = useRemoveCourseMutation()
  const [triggerRename] = useChangeCourseNameMutation()
  const [triggerChangeLecturer] = useChangeCourseLecturerMutation()
  const [triggerSearchLecturers] = useSearchLecturersMutation()
  const [triggerChangeTimeSlot] = useChangeCourseTimeSlotMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)
  const [showChangeLecturerModal, setShowChangeLecturerModal] = useState(false)
  const [showChangeTimeSlotModal, setShowChangeTimeSlotModal] = useState(false)

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
            label: 'Rename course',
            onClick: () => {
              setShowRenameModal(true)
            },
          },
          {
            label: 'Change timeslot',
            onClick: () => {
              setShowChangeTimeSlotModal(true)
            },
          },
          {
            label: 'Change lecturer',
            onClick: () => {
              setShowChangeLecturerModal(true)
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
      <EditFieldModal
        title="Change course name"
        show={showRenameModal}
        handleClose={() => {
          setShowRenameModal(false)
        }}
        handleSubmit={async (newGroupName) => {
          await triggerRename({
            groupId: courseInfo.groupId,
            groupName: newGroupName,
          })
        }}
        initialValues={courseInfo.courseName}
      />
      <EditFieldModal
        title="Change course timeslot"
        show={showChangeTimeSlotModal}
        handleClose={() => {
          setShowChangeTimeSlotModal(false)
        }}
        handleSubmit={async (newTimeSlot) => {
          await triggerChangeTimeSlot({
            groupId: courseInfo.groupId,
            timeSlot: newTimeSlot,
          })
        }}
        initialValues={courseInfo.timeSlot}
        isNumber
      />
      <SelectItemModal
        title="Change lecturer"
        show={showChangeLecturerModal}
        handleClose={() => {
          setShowChangeLecturerModal(false)
        }}
        handleSubmit={async (newLecturerId) => {
          await triggerChangeLecturer({
            groupId: courseInfo.groupId,
            currentLecturerId: courseInfo.lecturerId,
            newLecturerId,
          })
        }}
        handleSearchItems={async (query) => {
          const lecturers = await triggerSearchLecturers(query).unwrap()
          return lecturers.map((lecturer) => ({
            value: lecturer.id,
            label: lecturer.name,
          }))
        }}
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
