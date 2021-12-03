import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFacultyIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazySearchFacultiesQuery } from '../../../../app/api/group/facultySlice'
import { useEffect } from 'react'

const FacultySearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazySearchFacultiesQuery()
  const { data, isFetching } = query
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)

  useEffect(() => {
    trigger(selectedFacultyId, { preferCacheValue: true })
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
    <>
      <SearchCard
        label="Faculty"
        items={data}
        selectedItemKey={selectedFacultyId}
        keySelector={(faculty) => faculty.groupId}
        nameSelector={(faculty) => faculty.facultyName}
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
