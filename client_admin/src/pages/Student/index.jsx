import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedStudentIdSelector,
  setSelectedStudentId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import StudentSearchCard from './components/StudentSearchCard'

const StudentPage = () => {
  const selectedStudentId = useSelectedItemId(
    selectedStudentIdSelector,
    setSelectedStudentId,
  )

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <StudentSearchCard />
      </Col>
      {selectedStudentId ? (
        <>
          <Col md="4">
            <h1>Info Card</h1>
          </Col>
          <Col md="4">ListCard</Col>
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

export default StudentPage
