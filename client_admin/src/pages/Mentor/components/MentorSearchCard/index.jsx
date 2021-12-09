import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedMentorIdSelector,
  setIsLoading,
  setSelectedMentorId,
} from '../../../../app/pageSlice'
import { useSearchMentorsMutation } from '../../../../app/api/group/mentorSlice'
import { Fragment, useEffect, useState } from 'react'
import MentorAddModal from './MentorAddModal'

const MentorSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useSearchMentorsMutation()
  const { data, isLoading } = query
  const selectedMentorId = useSelector(selectedMentorIdSelector)
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading, dispatch])

  return (
    <Fragment>
      <SearchCard
        label="Mentor"
        items={data}
        selectedItemKey={selectedMentorId}
        keySelector={(mentor) => mentor.groupId}
        nameSelector={(mentor) => mentor.groupName}
        showKey={false}
        onSearch={(query) => trigger(query)}
        onAdd={() => setAddModal(true)}
        onSelect={(mentor) => dispatch(setSelectedMentorId(mentor.groupId))}
      />
      <MentorAddModal show={addModal} handleClose={() => setAddModal(false)} />
    </Fragment>
  )
}

export default MentorSearchCard
