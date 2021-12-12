import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetLecturerFacultyQuery,
  useGetLecturerInfoQuery,
  useGetLecturerMentorGroupsQuery,
  useRemoveLecturerMutation,
} from '../../../../app/api/user/lecturerSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading, setSelectedLecturerId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'

const LecturerDetailCard = ({ selectedLecturerId }) => {
  const { data: mentorGroups, isFetching: mentorIsFetching } =
    useGetLecturerMentorGroupsQuery(selectedLecturerId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetLecturerFacultyQuery(selectedLecturerId)
  const { data: lecturerInfo, isFetching: lecturerIsFetching } =
    useGetLecturerInfoQuery(selectedLecturerId)
  const [triggerRemoveLecturer] = useRemoveLecturerMutation()
  const [showRemoveWarning, setShowRemoveWarning] = useState()

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
            destination: `/faculty/${faculty.groupId}`,
          },
        ]}
        buttons={[
          {
            label: 'Edit basic info',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Change password',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Change faculty',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Remove lecturer',
            onClick: () => setShowRemoveWarning(true),
          },
        ]}
        listItems={mentorGroups}
        listItemLabel="mentor group"
        nameSelector={(mentorGroup) => mentorGroup.groupName}
        keySelector={(mentorGroup) => mentorGroup.groupId}
        linkSelector={(mentorGroup) => `/mentor/${mentorGroup.groupId}`}
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
