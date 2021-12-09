import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedLecturerIdSelector,
  setIsLoading,
  setSelectedLecturerId,
} from '../../../../app/pageSlice'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import { Fragment, useEffect, useState } from 'react'
import LecturerAddModal from './LecturerAddModal'

const LecturerSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchLecturersMutation()
  const { data, isLoading } = query
  const selectedLecturerId = useSelector(selectedLecturerIdSelector)
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading, dispatch])

  return (
    <Fragment>
      <SearchCard
        label="Lecturer"
        items={data}
        selectedItemKey={selectedLecturerId}
        keySelector={(lecturer) => lecturer.id}
        nameSelector={(lecturer) => lecturer.name}
        showKey={true}
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
