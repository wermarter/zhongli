import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedStudentIdSelector,
  setSelectedStudentId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import StudentSearchCard from './components/StudentSearchCard'
import StudentDetailCard from './components/StudentDetailCard'
import StudentListCard from './components/StudentListCard'

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
            <StudentDetailCard selectedStudentId={selectedStudentId} />
          </Col>
          <Col md="4">
            <StudentListCard selectedStudentId={selectedStudentId} />
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

export default StudentPage
