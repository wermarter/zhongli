import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetLecturerFacultyQuery,
  useGetLecturerInfoQuery,
  useGetLecturerMentorGroupsQuery,
} from '../../../../app/api/user/lecturerSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const LecturerDetailCard = ({ selectedLecturerId }) => {
  const { data: mentorGroups, isFetching: mentorIsFetching } =
    useGetLecturerMentorGroupsQuery(selectedLecturerId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetLecturerFacultyQuery(selectedLecturerId)
  const { data: lecturerInfo, isFetching: lecturerIsFetching } =
    useGetLecturerInfoQuery(selectedLecturerId)

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
    <DetailCard
      label="Lecturer"
      fields={[
        { label: 'Name', content: lecturerInfo.name },
        { label: 'ID', content: lecturerInfo.id },
        { label: 'PSID', content: lecturerInfo.psid },
        { label: 'Address', content: lecturerInfo.address },
      ]}
      buttons={[
        {
          label: 'Edit',
          onClick: () => {
            console.log('Editing lecturer')
          },
        },
        {
          label: 'Del',
          onClick: () => {
            console.log('Removing lecturer')
          },
        },
      ]}
      links={[
        {
          label: 'Faculty',
          content: faculty.facultyName,
          destination: `/faculty/${faculty.groupId}`,
        },
      ]}
      listItems={mentorGroups}
      listItemLabel="mentor group"
      nameSelector={(mentorGroup) => mentorGroup.name}
      keySelector={(mentorGroup) => mentorGroup.groupId}
      linkSelector={(mentorGroup) => `/mentor/${mentorGroup.groupId}`}
    />
  )
}

export default LecturerDetailCard
