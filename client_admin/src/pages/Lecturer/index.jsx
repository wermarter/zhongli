import useItemParam from '../../hooks/useItemParam'
import {
  selectedLecturerIdSelector,
  setSelectedLecturerId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import LecturerSearchCard from './components/LecturerSearchCard'
import LecturerDetailCard from './components/LecturerDetailCard'
import LecturerListCard from './components/LecturerListCard'
import { useDispatch, useSelector } from 'react-redux'

const LecturerPage = () => {
  const dispatch = useDispatch()
  const selectedLecturerId = useSelector(selectedLecturerIdSelector)

  useItemParam({
    selectedItemId: selectedLecturerId,
    setSelectedItemId: (lecturerId) => {
      dispatch(setSelectedLecturerId(lecturerId))
    },
  })

  return (
    <Row className="justify-content-md-center my-3">
      <Col md="3">
        <LecturerSearchCard />
      </Col>
      {selectedLecturerId ? (
        <>
          <Col md="4">
            <LecturerDetailCard selectedLecturerId={selectedLecturerId} />
          </Col>
          <Col md="4">
            <LecturerListCard selectedLecturerId={selectedLecturerId} />
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

export default LecturerPage
