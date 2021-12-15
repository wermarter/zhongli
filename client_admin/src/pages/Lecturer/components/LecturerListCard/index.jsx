import { useGetLecturerCoursesQuery } from '../../../../app/api/user/lecturerSlice'
import ListCard from '../../../../components/ListCard'

const LecturerListCard = ({ selectedLecturerId }) => {
  const { data: courses, isFetching } =
    useGetLecturerCoursesQuery(selectedLecturerId)

  if (isFetching) {
    return <></>
  }

  return (
    <ListCard
      label="Course"
      items={courses}
      keySelector={(course) => course.groupId}
      nameSelector={(course) => course.courseName}
      linkSelector={(course) => `/course/${course.groupId}`}
      showButtons={false}
    />
  )
}

export default LecturerListCard
