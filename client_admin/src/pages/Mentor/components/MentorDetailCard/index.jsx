import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useChangeGroupNameMutation,
  useChangeMentorIdMutation,
  useGetMentorInfoQuery,
  useRemoveMentorGroupMutation,
} from '../../../../app/api/group/mentorSlice'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import { setSelectedMentorId } from '../../../../app/pageSlice'
import DetailCard from '../../../../components/DetailCard'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import EditFieldModal from '../../../../components/modals/EditFieldModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'

const MentorDetailCard = ({ selectedMentorId }) => {
  const { data: mentorInfo, isFetching } =
    useGetMentorInfoQuery(selectedMentorId)

  const [triggerRemoveMentorGroup] = useRemoveMentorGroupMutation()
  const [triggerRename] = useChangeGroupNameMutation()
  const [triggerChangeMentor] = useChangeMentorIdMutation()
  const [triggerSearchLecturers] = useSearchLecturersMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)
  const [showChangeMentorModal, setShowChangeMentorModal] = useState(false)

  const dispatch = useDispatch()

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Group"
        fields={[
          { label: 'Group name', content: mentorInfo.groupName },
          { label: 'Group ID', content: mentorInfo.groupId },
        ]}
        links={[
          {
            label: 'Mentor',
            content: mentorInfo.mentorName,
            destination: `/lecturer/${mentorInfo.mentorId || ''}`,
          },
        ]}
        buttons={[
          {
            label: 'Rename group',
            onClick: () => {
              setShowRenameModal(true)
            },
          },
          {
            label: 'Change mentor',
            onClick: () => {
              setShowChangeMentorModal(true)
            },
          },
          {
            label: 'Remove group',
            onClick: () => {
              setShowRemoveWarning(true)
            },
          },
        ]}
      />
      <EditFieldModal
        title="Change group name"
        show={showRenameModal}
        handleClose={() => {
          setShowRenameModal(false)
        }}
        handleSubmit={async (newGroupName) => {
          await triggerRename({
            groupId: mentorInfo.groupId,
            groupName: newGroupName,
          })
        }}
        initialValues={mentorInfo.groupName}
      />
      <SelectItemModal
        title="Change mentor"
        show={showChangeMentorModal}
        handleClose={() => {
          setShowChangeMentorModal(false)
        }}
        handleSubmit={async (newMentorId) => {
          await triggerChangeMentor({
            groupId: mentorInfo.groupId,
            currentMentorId: mentorInfo.mentorId,
            newMentorId,
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
        title="Remove mentor group?"
        content="All students and lecturers will be removed from this mentor group too."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          dispatch(setSelectedMentorId(null))
          await triggerRemoveMentorGroup({
            groupId: mentorInfo.groupId,
          }).unwrap()
        }}
      />
    </Fragment>
  )
}

export default MentorDetailCard
