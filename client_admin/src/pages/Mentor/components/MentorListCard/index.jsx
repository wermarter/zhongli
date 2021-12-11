import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMentorGroupStudentsQuery } from '../../../../app/api/group/mentorSlice'
import { setIsLoading } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const MentorListCard = ({ selectedMentorId }) => {
  const { data: students, isFetching } =
    useGetMentorGroupStudentsQuery(selectedMentorId)
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
    <ListCard
      label="Student"
      items={students}
      keySelector={(student) => student.userId}
      nameSelector={(student) => student.userName}
      linkSelector={(student) => `/student/${student.userId}`}
      showButtons={false}
    />
  )
}

export default MentorListCard
