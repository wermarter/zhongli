import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  useChangeFacultyAdminMutation,
  useChangeFacultyDisplayIdMutation,
  useChangeFacultyNameMutation,
  useGetFacultyInfoQuery,
  useRemoveFacultyMutation,
} from '../../../../app/api/group/facultySlice'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import { setSelectedFacultyId } from '../../../../app/pageSlice'
import DetailCard from '../../../../components/DetailCard'
import ConfirmationModal from '../../../../components/modals/ConfirmationModal'
import EditFieldModal from '../../../../components/modals/EditFieldModal'
import SelectItemModal from '../../../../components/modals/SelectItemModal'

const FacultyDetailCard = ({ selectedFacultyId }) => {
  const { data: facultyInfo, isFetching } =
    useGetFacultyInfoQuery(selectedFacultyId)
  const [triggerSearchLecturers] = useSearchLecturersMutation()
  const [triggerRemoveFaculty] = useRemoveFacultyMutation()
  const [triggerRename] = useChangeFacultyNameMutation()
  const [triggerChangeId] = useChangeFacultyDisplayIdMutation()
  const [triggerChangeAdmin] = useChangeFacultyAdminMutation()

  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)
  const [showChangeIdModal, setShowChangeIdModal] = useState(false)
  const [showChangeAdminModal, setShowChangeAdminModal] = useState(false)

  const dispatch = useDispatch()

  if (isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <DetailCard
        label="Faculty"
        fields={[
          { label: 'Faculty name', content: facultyInfo.facultyName },
          { label: 'Faculty ID', content: facultyInfo.displayId },
        ]}
        links={[
          {
            label: 'Admin',
            content: facultyInfo.adminName,
            destination: `/lecturer/${facultyInfo.adminId || ''}`,
          },
        ]}
        buttons={[
          {
            label: 'Rename faculty',
            onClick: () => {
              setShowRenameModal(true)
            },
          },
          {
            label: 'Change faculty ID',
            onClick: () => {
              setShowChangeIdModal(true)
            },
          },
          {
            label: 'Change faculty admin',
            onClick: () => {
              setShowChangeAdminModal(true)
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
        title="Change faculty ID"
        show={showChangeIdModal}
        handleClose={() => {
          setShowChangeIdModal(false)
        }}
        handleSubmit={async (newFacultyId) => {
          await triggerChangeId({
            groupId: facultyInfo.groupId,
            displayId: newFacultyId,
          })
        }}
        initialValues={facultyInfo.displayId}
      />
      <SelectItemModal
        title="Change faculty admin"
        show={showChangeAdminModal}
        handleClose={() => {
          setShowChangeAdminModal(false)
        }}
        handleSubmit={async (newAdminId) => {
          await triggerChangeAdmin({
            groupId: facultyInfo.groupId,
            adminId: newAdminId,
          })
        }}
        handleSearchItems={async (query) => {
          const lecturers = await triggerSearchLecturers(query).unwrap()
          return lecturers.map((lecturer) => ({
            value: lecturer.id,
            label: lecturer.name,
          }))
        }}
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
