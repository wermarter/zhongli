import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedLecturerIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazySearchLecturersQuery } from '../../../../app/api/user/lecturerSlice'
import { useEffect } from 'react'

const LecturerSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazySearchLecturersQuery()
  const { data, isFetching } = query
  const selectedLecturerId = useSelector(selectedLecturerIdSelector)

  useEffect(() => {
    trigger(selectedLecturerId)
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
        itemName="Lecturer"
        items={data}
        selectedItemKey={selectedLecturerId}
        keySelector={(lecturer) => lecturer.id}
        nameSelector={(lecturer) => lecturer.name}
        showKey={true}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => {
          console.log('Add lecturer button clicked')
        }}
      />
    </>
  )
}

export default LecturerSearchCard
