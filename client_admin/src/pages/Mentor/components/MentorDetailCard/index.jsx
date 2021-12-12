import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetMentorInfoQuery,
  useRemoveMentorGroupMutation,
} from '../../../../app/api/group/mentorSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading, setSelectedMentorId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'

const MentorDetailCard = ({ selectedMentorId }) => {
  const { data: mentorInfo, isFetching } =
    useGetMentorInfoQuery(selectedMentorId)
  const [triggerRemoveMentorGroup] = useRemoveMentorGroupMutation()
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
        label="Group"
        fields={[
          { label: 'Group name', content: mentorInfo.groupName },
          { label: 'Group ID', content: mentorInfo.groupId },
        ]}
        links={[
          {
            label: 'Mentor',
            content: mentorInfo.mentorName,
            destination: `/lecturer/${mentorInfo.mentorId}`,
          },
        ]}
        buttons={[
          {
            label: 'Edit group name',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Change mentor',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Remove group',
            onClick: () => setShowRemoveWarning(true),
          },
        ]}
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
