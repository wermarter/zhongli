import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetFacultyLecturersQuery } from '../../../../app/api/group/facultySlice'
import { loadingStarted, loadingDone } from '../../../../app/pageSlice'
import ListCard from '../../../../components/ListCard'

const FacultyListCard = ({ selectedFacultyId }) => {
  const { data: lecturers, isFetching } =
    useGetFacultyLecturersQuery(selectedFacultyId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFetching) {
      dispatch(loadingStarted())
    } else {
      dispatch(loadingDone())
    }
  }, [isFetching, dispatch])

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
