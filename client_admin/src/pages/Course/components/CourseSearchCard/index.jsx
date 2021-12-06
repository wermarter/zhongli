import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedCourseIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useSearchCoursesMutation } from '../../../../app/api/group/courseSlice'
import { useEffect } from 'react'

const CourseSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchCoursesMutation()
  const { data, isLoading } = query
  const selectedCourseId = useSelector(selectedCourseIdSelector)

  useEffect(() => {
    trigger(selectedCourseId)
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
        label="Course"
        items={data}
        selectedItemKey={selectedCourseId}
        keySelector={(course) => course.groupId}
        nameSelector={(course) => course.groupName}
        showKey={false}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => {
          console.log('Add course button clicked')
        }}
      />
    </>
  )
}

export default CourseSearchCard
