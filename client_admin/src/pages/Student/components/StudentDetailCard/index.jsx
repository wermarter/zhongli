import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useChangeStudentFacultyMutation,
  useChangeStudentInfoMutation,
  useChangeStudentMentorMutation,
  useChangeUserPasswordMutation,
  useGetStudentFacultyQuery,
  useGetStudentInfoQuery,
  useGetStudentMentorGroupQuery,
  useRemoveStudentMutation,
} from '../../../../app/api/user/studentSlice'
import DetailCard from '../../../../components/DetailCard'
import { loadingStarted, loadingDone, setSelectedStudentId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import EditUserInfoModal from '../../../../components/modals/EditUserInfoModal'
import ChangePasswordModal from '../../../../components/modals/ChangePasswordModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import { useSearchMentorsMutation } from '../../../../app/api/group/mentorSlice'

const StudentDetailCard = ({ selectedStudentId }) => {
  const { data: mentorGroup, isFetching: mentorIsFetching } =
    useGetStudentMentorGroupQuery(selectedStudentId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetStudentFacultyQuery(selectedStudentId)
  const { data: studentInfo, isFetching: studentIsFetching } =
    useGetStudentInfoQuery(selectedStudentId)

  const [triggerRemoveStudent] = useRemoveStudentMutation()
  const [triggerChangeStudentInfo] = useChangeStudentInfoMutation()
  const [triggerChangePassword] = useChangeUserPasswordMutation()
  const [triggerChangeMentor] = useChangeStudentMentorMutation()
  const [triggerChangeFaculty] = useChangeStudentFacultyMutation()
  const [triggerSearchFaculty] = useSearchFacultiesMutation()
  const [triggerSearchMentor] = useSearchMentorsMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showEditInfoModal, setShowEditInfoModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [showChangeMentorModal, setShowChangeMentorModal] = useState(false)
  const [showChangeFacultyModal, setShowChangeFacultyModal] = useState(false)

  const isFetching = mentorIsFetching || facultyIsFetching || studentIsFetching

  const dispatch = useDispatch()

  useEffect(() => {
    if (isFetching) {
      dispatch(loadingStarted())
    } else {
      dispatch(loadingDone())
    }
  }, [isFetching, dispatch])

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Student"
        fields={[
          { label: 'Name', content: studentInfo.name },
          { label: 'ID', content: studentInfo.id },
          { label: 'PSID', content: studentInfo.psid },
          { label: 'Address', content: studentInfo.address },
        ]}
        links={[
          {
            label: 'Mentor',
            content: `${mentorGroup.mentorName} (${mentorGroup.groupName})`,
            destination: `/mentor/${mentorGroup.groupId || ''}`,
          },
          {
            label: 'Faculty',
            content: faculty.facultyName,
            destination: `/faculty/${faculty.groupId || ''}`,
          },
        ]}
        buttons={[
          {
            label: 'Edit basic info',
            onClick: () => {
              setShowEditInfoModal(true)
            },
          },
          {
            label: 'Change password',
            onClick: () => {
              setShowChangePasswordModal(true)
            },
          },
          {
            label: 'Change mentor',
            onClick: () => {
              setShowChangeMentorModal(true)
            },
          },
          {
            label: 'Change faculty',
            onClick: () => {
              setShowChangeFacultyModal(true)
            },
          },
          {
            label: 'Remove student',
            onClick: () => {
              setShowRemoveWarning(true)
            },
          },
        ]}
      />
      <EditUserInfoModal
        title="Edit student info"
        show={showEditInfoModal}
        handleClose={() => {
          setShowEditInfoModal(false)
        }}
        handleSubmit={async ({ name, address }) => {
          await triggerChangeStudentInfo({
            id: studentInfo.id,
            name,
            address,
          })
        }}
        initialValues={{
          name: studentInfo.name,
          address: studentInfo.address,
        }}
      />
      <ChangePasswordModal
        title="Change student password"
        show={showChangePasswordModal}
        handleClose={() => {
          setShowChangePasswordModal(false)
        }}
        handleSubmit={async (password) => {
          await triggerChangePassword({
            userId: studentInfo.id,
            password,
          })
        }}
      />
      <SelectItemModal
        title="Change mentor group"
        show={showChangeMentorModal}
        handleClose={() => {
          setShowChangeMentorModal(false)
        }}
        handleSubmit={async (newMentorGroupId) => {
          await triggerChangeMentor({
            id: studentInfo.id,
            currentMentorGroupId: mentorGroup.groupId,
            newMentorGroupId,
          })
        }}
        handleSearchItems={async (query) => {
          const mentors = await triggerSearchMentor(query).unwrap()
          return mentors.map((mentor) => ({
            value: mentor.groupId,
            label: mentor.groupName,
          }))
        }}
      />
      <SelectItemModal
        title="Change student faculty"
        show={showChangeFacultyModal}
        handleClose={() => {
          setShowChangeFacultyModal(false)
        }}
        handleSubmit={async (newFacultyId) => {
          await triggerChangeFaculty({
            id: studentInfo.id,
            currentFacultyId: faculty.groupId,
            newFacultyId,
          })
        }}
        handleSearchItems={async (query) => {
          const faculties = await triggerSearchFaculty(query).unwrap()
          return faculties.map((faculty) => ({
            value: faculty.groupId,
            label: faculty.groupName,
          }))
        }}
      />
      <ConfirmationModal
        title="Remove student?"
        content="Information related to this student cannot be recovered."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          dispatch(setSelectedStudentId(null))
          await triggerRemoveStudent({ userId: studentInfo.id }).unwrap()
        }}
      />
    </Fragment>
  )
}

export default StudentDetailCard
