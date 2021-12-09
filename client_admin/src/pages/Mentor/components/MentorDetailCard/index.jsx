import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetMentorInfoQuery,
  useRemoveMentorGroupMutation,
} from '../../../../app/api/group/mentorSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading, setSelectedMentorId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/ConfirmationModal'

const MentorDetailCard = ({ selectedMentorId }) => {
  const { data: mentorInfo, isFetching } =
    useGetMentorInfoQuery(selectedMentorId)
  const [triggerRemoveMentorGroup] = useRemoveMentorGroupMutation()
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
        label="Group"
        fields={[
          { label: 'Group name', content: mentorInfo.groupName },
          { label: 'Group ID', content: mentorInfo.groupId },
        ]}
        buttons={[
          {
            label: 'Edit',
            onClick: () => {
              console.log('Editing course')
            },
          },
          {
            label: 'Remove group',
            onClick: () => setshowRemoveWarning(true),
          },
        ]}
        links={[
          {
            label: 'Mentor',
            content: mentorInfo.mentorName,
            destination: `/lecturer/${mentorInfo.mentorId}`,
          },
        ]}
      />
      <ConfirmationModal
        title="Remove mentor group?"
        content="All students and lecturers will be removed from this mentor group too."
        show={showRemoveWarning}
        handleClose={() => setshowRemoveWarning(false)}
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
