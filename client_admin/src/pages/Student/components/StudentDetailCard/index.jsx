import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetStudentFacultyQuery,
  useGetStudentInfoQuery,
  useGetStudentMentorGroupQuery,
} from '../../../../app/api/user/studentSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const StudentDetailCard = ({ selectedStudentId }) => {
  const { data: mentorGroup, isFetching: mentorIsFetching } =
    useGetStudentMentorGroupQuery(selectedStudentId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetStudentFacultyQuery(selectedStudentId)
  const { data: studentInfo, isFetching: studentIsFetching } =
    useGetStudentInfoQuery(selectedStudentId)

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
          label: 'Del',
          onClick: () => {
            console.log('Removing student')
          },
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
  )
}

export default StudentDetailCard
