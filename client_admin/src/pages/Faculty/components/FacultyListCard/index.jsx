import { useGetFacultyLecturersQuery } from '../../../../app/api/group/facultySlice'
import ListCard from '../../../../components/ListCard'

const FacultyListCard = ({ selectedFacultyId }) => {
  const { data: lecturers, isFetching } =
    useGetFacultyLecturersQuery(selectedFacultyId)

  if (isFetching) {
    return <></>
  }

  return (
    <ListCard
      label="Lecturer"
      items={lecturers}
      keySelector={(lecturer) => lecturer.userId}
      nameSelector={(lecturer) => lecturer.userName}
      linkSelector={(lecturer) => `/lecturer/${lecturer.userId}`}
      showButtons={false}
    />
  )
}

export default FacultyListCard
