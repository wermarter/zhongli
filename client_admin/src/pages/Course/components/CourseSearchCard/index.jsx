import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedCourseIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazySearchCoursesQuery } from '../../../../app/api/group/courseSlice'
import { useEffect } from 'react'

const CourseSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazySearchCoursesQuery()
  const { data, isFetching } = query
  const selectedCourseId = useSelector(selectedCourseIdSelector)

  useEffect(() => {
    trigger(selectedCourseId)
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
        itemName="Course"
        items={data}
        selectedItemKey={selectedCourseId}
        keySelector={(course) => course.groupId}
        nameSelector={(course) => course.courseName}
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
