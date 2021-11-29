import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedMentorIdSelector,
  setSelectedMentorId,
} from '../../app/pageSlice'
import { Row, Col, Fade } from 'react-bootstrap'
import MentorSearchCard from './components/MentorSearchCard'

const MentorPage = () => {
  const selectedMentorId = useSelectedItemId(
    selectedMentorIdSelector,
    setSelectedMentorId,
  )

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <MentorSearchCard />
      </Col>
      <Col md="4">
        <Fade in={!!selectedMentorId} dimension="width">
          <h1>Info Card</h1>
        </Fade>
      </Col>
      <Col md="4">ListCard</Col>
    </Row>
  )
}

export default MentorPage
