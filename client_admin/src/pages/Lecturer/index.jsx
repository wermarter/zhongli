import useSelectedItemId from '../../hooks/useSelectedItemId'
import {
  selectedLecturerIdSelector,
  setSelectedLecturerId,
} from '../../app/pageSlice'
import { Row, Col } from 'react-bootstrap'
import LecturerSearchCard from './components/LecturerSearchCard'
import LecturerDetailCard from './components/LecturerDetailCard'
import LecturerListCard from './components/LecturerListCard'

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
