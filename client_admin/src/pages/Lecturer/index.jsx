import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedLecturerIdSelector,
  setSelectedLecturerId,
} from '../../app/pageSlice'
import { Row, Col, Fade } from 'react-bootstrap'
import LecturerSearchCard from './components/LecturerSearchCard'

const LecturerPage = () => {
  const selectedLecturerId = useSelectedItemId(
    selectedLecturerIdSelector,
    setSelectedLecturerId,
  )

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <LecturerSearchCard />
      </Col>
      <Col md="4">
        <Fade in={!!selectedLecturerId} dimension="width">
          <h1>Info Card</h1>
        </Fade>
      </Col>
      <Col md="4">ListCard</Col>
    </Row>
  )
}

export default LecturerPage
