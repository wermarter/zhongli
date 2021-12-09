import useItemParam from '../../hooks/useItemParam'
import {
  selectedFacultyIdSelector,
  setSelectedFacultyId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import FacultySearchCard from './components/FacultySearchCard'
import FacultyDetailCard from './components/FacultyDetailCard'
import FacultyListCard from './components/FacultyListCard'
import { useDispatch, useSelector } from 'react-redux'

const FacultyPage = () => {
  const dispatch = useDispatch()
  const selectedFacultyId = useSelector(selectedFacultyIdSelector)

  useItemParam({
    selectedItemId: selectedFacultyId,
    setSelectedItemId: (facultyId) => {
      dispatch(setSelectedFacultyId(facultyId))
    },
  })

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <FacultySearchCard />
      </Col>
      {selectedFacultyId ? (
        <>
          <Col md="4">
            <FacultyDetailCard selectedFacultyId={selectedFacultyId} />
          </Col>
          <Col md="4">
            <FacultyListCard selectedFacultyId={selectedFacultyId} />
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

export default FacultyPage
