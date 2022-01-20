import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchStudentsMutation } from '../../../../app/api/user/studentSlice'
import {
  selectedStudentIdSelector,
  setSelectedStudentId,
} from '../../../../app/pageSlice'
import SearchCard from '../../../../components/SearchCard'
import StudentAddModal from './StudentAddModal'

const StudentSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchStudentsMutation()
  const { data } = query
  const selectedStudentId = useSelector(selectedStudentIdSelector)
  const [addModal, setAddModal] = useState(false)

  return (
    <Fragment>
      <SearchCard
        label="Student"
        items={data}
        selectedItemKey={selectedStudentId}
        keySelector={(student) => student.id}
        nameSelector={(student) => student.name}
        // showKey={true}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(student) => dispatch(setSelectedStudentId(student.id))}
      />
      <StudentAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default StudentSearchCard
