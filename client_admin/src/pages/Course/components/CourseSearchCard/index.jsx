import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedCourseIdSelector,
  loadingStarted,
  loadingDone,
  setSelectedCourseId,
} from '../../../../app/pageSlice'
import { useSearchCoursesMutation } from '../../../../app/api/group/courseSlice'
import { Fragment, useEffect, useState } from 'react'
import CourseAddModal from './CourseAddModal'

const CourseSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchCoursesMutation()
  const { data, isLoading } = query
  const selectedCourseId = useSelector(selectedCourseIdSelector)
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    if (isLoading) {
      dispatch(loadingStarted())
    } else {
      dispatch(loadingDone())
    }
  }, [isLoading, dispatch])

  return (
    <Fragment>
      <SearchCard
        label="Course"
        items={data}
        selectedItemKey={selectedCourseId}
        keySelector={(course) => course.groupId}
        nameSelector={(course) => course.groupName}
        showKey={false}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(course) => dispatch(setSelectedCourseId(course.groupId))}
      />
      <CourseAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default CourseSearchCard
