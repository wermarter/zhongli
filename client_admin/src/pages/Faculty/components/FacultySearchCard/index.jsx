import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFacultyIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import { useEffect } from 'react'

const FacultySearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchFacultiesMutation()
  const { data, isLoading } = query
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)

  useEffect(() => {
    trigger(selectedFacultyId)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isLoading, dispatch])

  return (
    <>
      <SearchCard
        label="Faculty"
        items={data}
        selectedItemKey={selectedFacultyId}
        keySelector={(faculty) => faculty.groupId}
        nameSelector={(faculty) => faculty.groupName}
        showKey={false}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => {
          console.log('Add faculty button clicked')
        }}
      />
    </>
  )
}

export default FacultySearchCard
