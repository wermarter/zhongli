import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetStudentFacultyQuery,
  useGetStudentInfoQuery,
  useGetStudentMentorGroupQuery,
  useRemoveStudentMutation,
} from '../../../../app/api/user/studentSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading, setSelectedStudentId } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'

const StudentDetailCard = ({ selectedStudentId }) => {
  const { data: mentorGroup, isFetching: mentorIsFetching } =
    useGetStudentMentorGroupQuery(selectedStudentId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetStudentFacultyQuery(selectedStudentId)
  const { data: studentInfo, isFetching: studentIsFetching } =
    useGetStudentInfoQuery(selectedStudentId)
  const [triggerRemoveStudent] = useRemoveStudentMutation()
  const [showRemoveWarning, setShowRemoveWarning] = useState()

  const isFetching = mentorIsFetching || facultyIsFetching || studentIsFetching

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
            content: mentorGroup.mentorName,
            destination: `/mentor/${mentorGroup.groupId}`,
          },
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
            label: 'Change mentor',
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
            label: 'Remove student',
            onClick: () => setShowRemoveWarning(true),
          },
        ]}
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
