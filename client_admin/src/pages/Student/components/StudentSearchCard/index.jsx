import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedStudentIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazySearchStudentsQuery } from '../../../../app/api/user/studentSlice'
import { useEffect } from 'react'

const StudentSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazySearchStudentsQuery()
  const { data, isFetching } = query
  const selectedStudentId = useSelector(selectedStudentIdSelector)

  useEffect(() => {
    trigger(selectedStudentId)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

  return (
    <SearchCard
      label="Student"
      items={data}
      selectedItemKey={selectedStudentId}
      keySelector={(student) => student.id}
      nameSelector={(student) => student.name}
      showKey={true}
      handleSubmit={(query) => trigger(query)}
      handleAdd={() => {
        console.log('Add student button clicked')
      }}
    />
  )
}

export default StudentSearchCard
