import useItemParam from '../../hooks/useItemParam'
import {
  selectedStudentIdSelector,
  setSelectedStudentId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import StudentSearchCard from './components/StudentSearchCard'
import StudentDetailCard from './components/StudentDetailCard'
import StudentListCard from './components/StudentListCard'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StudentPage = () => {
  const dispatch = useDispatch()
  const selectedStudentId = useSelector(selectedStudentIdSelector)

  useItemParam({
    selectedItemId: selectedStudentId,
    setSelectedItemId: (studentId) => {
      dispatch(setSelectedStudentId(studentId))
    },
  })

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <StudentSearchCard />
      </Col>
      {selectedStudentId ? (
        <Fragment>
          <Col md="4">
            <StudentDetailCard selectedStudentId={selectedStudentId} />
          </Col>
          <Col md="4">
            <StudentListCard selectedStudentId={selectedStudentId} />
          </Col>
        </Fragment>
      ) : (
        <Fragment>
          <Col md="4"></Col>
          <Col md="4"></Col>
        </Fragment>
      )}
    </Row>
  )
}

export default StudentPage
