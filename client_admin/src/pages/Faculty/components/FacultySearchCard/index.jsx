import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import {
  selectedFacultyIdSelector,
  setSelectedFacultyId,
} from '../../../../app/pageSlice'
import SearchCard from '../../../../components/SearchCard'
import FacultyAddModal from './FacultyAddModal'

const FacultySearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchFacultiesMutation()
  const { data } = query
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)
  const [addModal, setAddModal] = useState(false)

  return (
    <Fragment>
      <SearchCard
        label="Faculty"
        items={data}
        selectedItemKey={selectedFacultyId}
        keySelector={(faculty) => faculty.groupId}
        nameSelector={(faculty) => faculty.groupName}
        showKey={false}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(faculty) => dispatch(setSelectedFacultyId(faculty.groupId))}
      />
      <FacultyAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default FacultySearchCard
