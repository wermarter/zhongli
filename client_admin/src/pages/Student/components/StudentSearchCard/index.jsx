import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedStudentIdSelector,
  setIsLoading,
  setSelectedStudentId,
} from '../../../../app/pageSlice'
import { useSearchStudentsMutation } from '../../../../app/api/user/studentSlice'
import { Fragment, useEffect, useState } from 'react'
import StudentAddModal from './StudentAddModal'

const StudentSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchStudentsMutation()
  const { data, isLoading } = query
  const selectedStudentId = useSelector(selectedStudentIdSelector)
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading, dispatch])

  return (
    <Fragment>
      <SearchCard
        label="Student"
        items={data}
        selectedItemKey={selectedStudentId}
        keySelector={(student) => student.id}
        nameSelector={(student) => student.name}
        showKey={true}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(student) => dispatch(setSelectedStudentId(student.id))}
      />
      <StudentAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default StudentSearchCard
