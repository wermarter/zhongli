import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedFacultyIdSelector,
  setSelectedFacultyId,
} from '../../app/pageSlice'
import { Row, Col, Fade } from 'react-bootstrap'
import FacultySearchCard from './components/FacultySearchCard'

const FacultyPage = () => {
  const selectedFacultyId = useSelectedItemId(
    selectedFacultyIdSelector,
    setSelectedFacultyId,
  )

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <FacultySearchCard />
      </Col>
      <Col md="4">
        <Fade in={!!selectedFacultyId} dimension="width">
          <h1>Info Card</h1>
        </Fade>
      </Col>
      <Col md="4">ListCard</Col>
    </Row>
  )
}

export default FacultyPage
