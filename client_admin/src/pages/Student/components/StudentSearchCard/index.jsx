import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedStudentIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useSearchStudentsMutation } from '../../../../app/api/user/studentSlice'
import { Fragment, useEffect, useState } from 'react'
import StudentAddModal from './StudentAddModal'

const StudentSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchStudentsMutation()
  const { data, isLoading } = query
  const selectedStudentId = useSelector(selectedStudentIdSelector)

  useEffect(() => {
    trigger(selectedStudentId)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isLoading, dispatch])

  const [addModal, setAddModal] = useState(false)

  return (
    <Fragment>
      <SearchCard
        label="Student"
        items={data}
        selectedItemKey={selectedStudentId}
        keySelector={(student) => student.id}
        nameSelector={(student) => student.name}
        showKey={true}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => setAddModal(true)}
      />
      <StudentAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default StudentSearchCard
