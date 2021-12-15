import { useGetMentorGroupStudentsQuery } from '../../../../app/api/group/mentorSlice'
import ListCard from '../../../../components/ListCard'

const MentorListCard = ({ selectedMentorId }) => {
  const { data: students, isFetching } =
    useGetMentorGroupStudentsQuery(selectedMentorId)

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
