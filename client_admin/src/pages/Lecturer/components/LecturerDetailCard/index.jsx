import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useChangeLecturerFacultyMutation,
  useChangeLecturerInfoMutation,
  useGetLecturerFacultyQuery,
  useGetLecturerInfoQuery,
  useGetLecturerMentorGroupsQuery,
  useRemoveLecturerMutation,
} from '../../../../app/api/user/lecturerSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading, setSelectedLecturerId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import { useChangeUserPasswordMutation } from '../../../../app/api/user/studentSlice'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import EditUserInfoModal from '../../../../components/modals/EditUserInfoModal'
import ChangePasswordModal from '../../../../components/modals/ChangePasswordModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'

const LecturerDetailCard = ({ selectedLecturerId }) => {
  const { data: mentorGroups, isFetching: mentorIsFetching } =
    useGetLecturerMentorGroupsQuery(selectedLecturerId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetLecturerFacultyQuery(selectedLecturerId)
  const { data: lecturerInfo, isFetching: lecturerIsFetching } =
    useGetLecturerInfoQuery(selectedLecturerId)

  const [triggerRemoveLecturer] = useRemoveLecturerMutation()
  const [triggerChangeLecturerInfo] = useChangeLecturerInfoMutation()
  const [triggerChangePassword] = useChangeUserPasswordMutation()
  const [triggerChangeFaculty] = useChangeLecturerFacultyMutation()
  const [triggerSearchFaculty] = useSearchFacultiesMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showEditInfoModal, setShowEditInfoModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [showChangeFacultyModal, setShowChangeFacultyModal] = useState(false)

  const isFetching = mentorIsFetching || facultyIsFetching || lecturerIsFetching

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
        label="Lecturer"
        fields={[
          { label: 'Name', content: lecturerInfo.name },
          { label: 'ID', content: lecturerInfo.id },
          { label: 'PSID', content: lecturerInfo.psid },
          { label: 'Address', content: lecturerInfo.address },
        ]}
        links={[
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
            label: 'Change faculty',
            onClick: () => {
              setShowChangeFacultyModal(true)
            },
          },
          {
            label: 'Remove lecturer',
            onClick: () => {
              setShowRemoveWarning(true)
            },
          },
        ]}
        listItems={mentorGroups}
        listItemLabel="mentor group"
        nameSelector={(mentorGroup) => mentorGroup.groupName}
        keySelector={(mentorGroup) => mentorGroup.groupId}
        linkSelector={(mentorGroup) => `/mentor/${mentorGroup.groupId}`}
      />
      <EditUserInfoModal
        title="Edit lecturer info"
        show={showEditInfoModal}
        handleClose={() => {
          setShowEditInfoModal(false)
        }}
        handleSubmit={async ({ name, address }) => {
          await triggerChangeLecturerInfo({
            id: lecturerInfo.id,
            name,
            address,
          })
        }}
        initialValues={{
          name: lecturerInfo.name,
          address: lecturerInfo.address,
        }}
      />
      <ChangePasswordModal
        title="Change lecturer password"
        show={showChangePasswordModal}
        handleClose={() => {
          setShowChangePasswordModal(false)
        }}
        handleSubmit={async (password) => {
          await triggerChangePassword({
            userId: lecturerInfo.id,
            password,
          })
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
            id: lecturerInfo.id,
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
        title="Remove lecturer?"
        content="Information related to this lecturer cannot be recovered."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          dispatch(setSelectedLecturerId(null))
          await triggerRemoveLecturer({ userId: lecturerInfo.id }).unwrap()
        }}
      />
    </Fragment>
  )
}

export default LecturerDetailCard
