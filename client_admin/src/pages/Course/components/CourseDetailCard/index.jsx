import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useChangeCourseDisplayIdMutation,
  useChangeCourseLecturerMutation,
  useChangeCourseNameMutation,
  useChangeCourseTimeSlotMutation,
  useGetCourseInfoQuery,
  useRemoveCourseMutation,
} from '../../../../app/api/group/courseSlice'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import {
  selectedCourseIdSelector,
  setSelectedCourseId,
} from '../../../../app/pageSlice'
import DetailCard from '../../../../components/DetailCard'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import EditFieldModal from '../../../../components/modals/EditFieldModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'

const CourseDetailCard = () => {
  const selectedCourseId = useSelector(selectedCourseIdSelector)
  const { data: courseInfo, isFetching } =
    useGetCourseInfoQuery(selectedCourseId)
  const [triggerRemoveCourse] = useRemoveCourseMutation()
  const [triggerRename] = useChangeCourseNameMutation()
  const [triggerChangeLecturer] = useChangeCourseLecturerMutation()
  const [triggerSearchLecturers] = useSearchLecturersMutation()
  const [triggerChangeTimeSlot] = useChangeCourseTimeSlotMutation()
  const [triggerChangeId] = useChangeCourseDisplayIdMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)
  const [showChangeIdModal, setShowChangeIdModal] = useState(false)
  const [showChangeLecturerModal, setShowChangeLecturerModal] = useState(false)
  const [showChangeTimeSlotModal, setShowChangeTimeSlotModal] = useState(false)

  const dispatch = useDispatch()

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Course"
        fields={[
          { label: 'Course name', content: courseInfo.courseName },
          { label: 'Course ID', content: courseInfo.displayId },
          { label: 'Timeslot', content: courseInfo.timeSlot },
        ]}
        links={[
          {
            label: 'Lecturer',
            content: courseInfo.lecturerName,
            destination: `/lecturer/${courseInfo.lecturerId || ''}`,
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
            label: 'Change course ID',
            onClick: () => {
              setShowChangeIdModal(true)
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
        title="Change course ID"
        show={showChangeIdModal}
        handleClose={() => {
          setShowChangeIdModal(false)
        }}
        handleSubmit={async (newCourseId) => {
          await triggerChangeId({
            groupId: courseInfo.groupId,
            displayId: newCourseId,
          })
        }}
        initialValues={courseInfo.displayId}
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
