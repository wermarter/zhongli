import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useChangeFacultyDescriptionMutation,
  useChangeFacultyNameMutation,
  useGetFacultyInfoQuery,
  useRemoveFacultyMutation,
} from '../../../../app/api/group/facultySlice'
import { setSelectedFacultyId } from '../../../../app/pageSlice'
import DetailCard from '../../../../components/DetailCard'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import EditFieldModal from '../../../../components/modals/EditFieldModal'

const FacultyDetailCard = ({ selectedFacultyId }) => {
  const { data: facultyInfo, isFetching } =
    useGetFacultyInfoQuery(selectedFacultyId)

  const [triggerRemoveFaculty] = useRemoveFacultyMutation()
  const [triggerRename] = useChangeFacultyNameMutation()
  const [triggerChangeDescription] = useChangeFacultyDescriptionMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)
  const [showChangeDescriptionModal, setShowChangeDescriptionModal] =
    useState(false)

  const dispatch = useDispatch()

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Faculty"
        fields={[
          { label: 'Group name', content: facultyInfo.facultyName },
          { label: 'Group ID', content: facultyInfo.groupId },
          { label: 'Description', content: facultyInfo.facultyDescription },
        ]}
        buttons={[
          {
            label: 'Rename faculty',
            onClick: () => {
              setShowRenameModal(true)
            },
          },
          {
            label: 'Change description',
            onClick: () => {
              setShowChangeDescriptionModal(true)
            },
          },
          {
            label: 'Remove faculty',
            onClick: () => {
              setShowRemoveWarning(true)
            },
          },
        ]}
      />
      <EditFieldModal
        title="Change faculty name"
        show={showRenameModal}
        handleClose={() => {
          setShowRenameModal(false)
        }}
        handleSubmit={async (newGroupName) => {
          await triggerRename({
            groupId: facultyInfo.groupId,
            groupName: newGroupName,
          })
        }}
        initialValues={facultyInfo.facultyName}
      />
      <EditFieldModal
        title="Change faculty description"
        show={showChangeDescriptionModal}
        handleClose={() => {
          setShowChangeDescriptionModal(false)
        }}
        handleSubmit={async (newDescription) => {
          await triggerChangeDescription({
            groupId: facultyInfo.groupId,
            facultyDescription: newDescription,
          })
        }}
        initialValues={facultyInfo.facultyDescription}
      />
      <ConfirmationModal
        title="Remove faculty?"
        content="All students and lecturers will be removed from this faculty too."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          dispatch(setSelectedFacultyId(null))
          await triggerRemoveFaculty({ groupId: facultyInfo.groupId }).unwrap()
        }}
      />
    </Fragment>
  )
}

export default FacultyDetailCard
