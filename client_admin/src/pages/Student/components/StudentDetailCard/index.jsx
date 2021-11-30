import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetStudentFacultyQuery,
  useGetStudentMentorGroupQuery,
} from '../../../../app/api/user/studentSlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const StudentDetailCard = ({ selectedStudentId }) => {
  const { data: mentorGroup, isFetching: mentorIsFetching } =
    useGetStudentMentorGroupQuery(selectedStudentId)
  const { data: faculty, isFetching: facultyIsFetching } =
    useGetStudentFacultyQuery(selectedStudentId)
  const isFetching = mentorIsFetching || facultyIsFetching

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

  return <DetailCard mentorGroup={mentorGroup} faculty={faculty} />
}

export default StudentDetailCard
