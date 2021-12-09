import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useGetFacultyInfoQuery,
  useRemoveFacultyMutation,
} from '../../../../app/api/group/facultySlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'
import ConfirmationModal from '../../../../components/ConfirmationModal'

const FacultyDetailCard = ({ selectedFacultyId }) => {
  const { data: facultyInfo, isFetching } =
    useGetFacultyInfoQuery(selectedFacultyId)
  const [triggerRemoveFaculty] = useRemoveFacultyMutation()
  const [showRemoveWarning, setshowRemoveWarning] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Faculty"
        fields={[
          { label: 'Name', content: facultyInfo.facultyName },
          { label: 'ID', content: facultyInfo.groupId },
          { label: 'Description', content: facultyInfo.facultyDescription },
        ]}
        buttons={[
          {
            label: 'Edit',
            onClick: () => {
              console.log('Editing faculty')
            },
          },
          {
            label: 'Remove faculty',
            onClick: () => {
              setshowRemoveWarning(true)
            },
          },
        ]}
      />
      <ConfirmationModal
        title="Remove faculty?"
        content="All students and lecturers will be removed from this faculty too."
        show={showRemoveWarning}
        handleClose={() => setshowRemoveWarning(false)}
        handleSubmit={async () =>
          await triggerRemoveFaculty({ groupId: facultyInfo.groupId }).unwrap()
        }
        navigateTo="/faculty/deleted"
      />
    </Fragment>
  )
}

export default FacultyDetailCard
