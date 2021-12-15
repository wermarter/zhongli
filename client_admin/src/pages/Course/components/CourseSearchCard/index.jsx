import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchCoursesMutation } from '../../../../app/api/group/courseSlice'
import {
  selectedCourseIdSelector,
  setSelectedCourseId,
} from '../../../../app/pageSlice'
import SearchCard from '../../../../components/SearchCard'
import CourseAddModal from './CourseAddModal'

const CourseSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchCoursesMutation()
  const { data } = query
  const selectedCourseId = useSelector(selectedCourseIdSelector)
  const [addModal, setAddModal] = useState(false)

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
