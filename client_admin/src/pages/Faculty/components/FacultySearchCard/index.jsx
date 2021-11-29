import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFacultyIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazyGetFacultiesQuery } from '../../../../app/api/group/facultySlice'
import { useEffect } from 'react'

const FacultySearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazyGetFacultiesQuery()
  const { data, isFetching } = query
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)

  useEffect(() => {
    trigger()
  }, [trigger])

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

  return (
    <>
      <SearchCard
        itemName="Faculty"
        items={data}
        selectedItemKey={selectedFacultyId}
        keySelector={(faculty) => faculty.groupId}
        nameSelector={(faculty) => faculty.name}
        showKey={false}
        handleSubmit={trigger}
        handleAdd={() => {
          console.log('Add faculty button clicked')
        }}
      />
    </>
  )
}

export default FacultySearchCard
