import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedCourseIdSelector,
  setSelectedCourseId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import CourseSearchCard from './components/CourseSearchCard'
import CourseDetailCard from './components/CourseDetailCard'
import CourseListCard from './components/CourseListCard'

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
      {selectedCourseId ? (
        <>
          <Col md="4">
            <CourseDetailCard selectedCourseId={selectedCourseId} />
          </Col>
          <Col md="4">
            <CourseListCard selectedCourseId={selectedCourseId} />
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

export default CoursePage
