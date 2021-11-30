import SearchCard from '../../../../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedMentorIdSelector,
  setIsLoading,
} from '../../../../app/pageSlice'
import { useLazySearchMentorsQuery } from '../../../../app/api/group/mentorSlice'
import { useEffect } from 'react'

const MentorSearchCard = () => {
  const dispatch = useDispatch()
  const [trigger, query] = useLazySearchMentorsQuery()
  const { data, isFetching } = query
  const selectedMentorId = useSelector(selectedMentorIdSelector)

  useEffect(() => {
    trigger(selectedMentorId)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

  return (
    <>
      <SearchCard
        label="Mentor"
        items={data}
        selectedItemKey={selectedMentorId}
        keySelector={(mentor) => mentor.groupId}
        nameSelector={(mentor) => mentor.mentorName}
        showKey={false}
        handleSubmit={(query) => trigger(query)}
        handleAdd={() => {
          console.log('Add mentor button clicked')
        }}
      />
    </>
  )
}

export default MentorSearchCard
