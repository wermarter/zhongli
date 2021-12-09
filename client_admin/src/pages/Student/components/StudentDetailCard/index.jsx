import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetStudentFacultyQuery,
  useGetStudentInfoQuery,
  useGetStudentMentorGroupQuery,
  useRemoveStudentMutation,
} from '../../../../app/api/user/studentSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/ConfirmationModal'

const StudentDetailCard = ({ selectedStudentId }) => {
  const { data: mentorGroup, isFetching: mentorIsFetching } =
    useGetStudentMentorGroupQuery(selectedStudentId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetStudentFacultyQuery(selectedStudentId)
  const { data: studentInfo, isFetching: studentIsFetching } =
    useGetStudentInfoQuery(selectedStudentId)
  const [triggerRemoveStudent] = useRemoveStudentMutation()
  const [showRemoveWarning, setshowRemoveWarning] = useState()

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
        buttons={[
          {
            label: 'Edit',
            onClick: () => {
              console.log('Editing student')
            },
          },
          {
            label: 'Remove student',
            onClick: () => setshowRemoveWarning(true),
          },
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
      />
      <ConfirmationModal
        title="Remove student?"
        content="Information related to this student cannot be recovered."
        show={showRemoveWarning}
        handleClose={() => setshowRemoveWarning(false)}
        handleSubmit={async () =>
          await triggerRemoveStudent({ userId: studentInfo.id }).unwrap()
        }
        navigateTo="/student/deleted"
      />
    </Fragment>
  )
}

export default StudentDetailCard
