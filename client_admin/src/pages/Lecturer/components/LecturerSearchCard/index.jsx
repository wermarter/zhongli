import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import {
  selectedLecturerIdSelector,
  setSelectedLecturerId,
} from '../../../../app/pageSlice'
import SearchCard from '../../../../components/SearchCard'
import LecturerAddModal from './LecturerAddModal'

const LecturerSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchLecturersMutation()
  const { data } = query
  const selectedLecturerId = useSelector(selectedLecturerIdSelector)
  const [addModal, setAddModal] = useState(false)

  return (
    <Fragment>
      <SearchCard
        label="Lecturer"
        items={data}
        selectedItemKey={selectedLecturerId}
        keySelector={(lecturer) => lecturer.id}
        nameSelector={(lecturer) => lecturer.name}
        // showKey={true}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(lecturer) => dispatch(setSelectedLecturerId(lecturer.id))}
      />
      <LecturerAddModal
        show={addModal}
        handleClose={() => setAddModal(false)}
      />
    </Fragment>
  )
}

export default LecturerSearchCard
