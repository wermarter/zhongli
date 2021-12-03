import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMentorInfoQuery } from '../../../../app/api/group/mentorSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const MentorDetailCard = ({ selectedMentorId }) => {
  const { data: mentorInfo, isFetching } =
    useGetMentorInfoQuery(selectedMentorId)

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
      label="Group"
      fields={[
        { label: 'Group name', content: mentorInfo.name },
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
          label: 'Del',
          onClick: () => {
            console.log('Removing course')
          },
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
  )
}

export default MentorDetailCard
