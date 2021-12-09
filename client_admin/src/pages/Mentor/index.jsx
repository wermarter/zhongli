import useItemParam from '../../hooks/useItemParam'
import {
  selectedMentorIdSelector,
  setSelectedMentorId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import MentorSearchCard from './components/MentorSearchCard'
import MentorDetailCard from './components/MentorDetailCard'
import MentorListCard from './components/MentorListCard'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MentorPage = () => {
  const dispatch = useDispatch()
  const selectedMentorId = useSelector(selectedMentorIdSelector)

  useItemParam({
    selectedItemId: selectedMentorId,
    setSelectedItemId: (mentorId) => {
      dispatch(setSelectedMentorId(mentorId))
    },
  })

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <MentorSearchCard />
      </Col>
      {selectedMentorId ? (
        <>
          <Col md="4">
            <MentorDetailCard selectedMentorId={selectedMentorId} />
          </Col>
          <Col md="4">
            <MentorListCard selectedMentorId={selectedMentorId} />
          </Col>
        </>
      ) : (
        <>
          <Col md="4"></Col>
          <Col md="4"></Col>
        </>
      )}
    </Row>
  )
}

export default MentorPage
