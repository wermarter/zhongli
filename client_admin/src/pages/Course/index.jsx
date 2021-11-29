import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedCourseIdSelector,
  setSelectedCourseId,
} from '../../app/pageSlice'
import { Row, Col, Fade } from 'react-bootstrap'
import CourseSearchCard from './components/CourseSearchCard'

const CoursePage = () => {
  const selectedCourseId = useSelectedItemId(
    selectedCourseIdSelector,
    setSelectedCourseId,
  )

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <CourseSearchCard />
      </Col>
      <Col md="4">
        <Fade in={!!selectedCourseId} dimension="width">
          <h1>Info Card</h1>
        </Fade>
      </Col>
      <Col md="4">ListCard</Col>
    </Row>
  )
}

export default CoursePage
