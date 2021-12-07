import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFacultyIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import { Fragment, useEffect, useState } from 'react'
import FacultyAddModal from './FacultyAddModal'

const FacultySearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchFacultiesMutation()
  const { data, isLoading } = query
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    trigger(selectedFacultyId)
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
    <Fragment>
      <SearchCard
        label="Faculty"
        items={data}
        selectedItemKey={selectedFacultyId}
        keySelector={(faculty) => faculty.groupId}
        nameSelector={(faculty) => faculty.groupName}
        showKey={false}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => setAddModal(true)}
      />
      <FacultyAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default FacultySearchCard
