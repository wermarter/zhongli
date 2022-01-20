import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../../components/custom-fields/InputField'
import AsyncSelectField from '../../../../components/custom-fields/AsyncSelectField'
import { useAddNewMentorGroupMutation } from '../../../../app/api/group/mentorSlice'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import { setSelectedMentorId } from '../../../../app/pageSlice'
import { useDispatch } from 'react-redux'

const validationSchema = Yup.object().shape({
  displayId: Yup.string().required('This field is required.'),
  groupName: Yup.string().required('This field is required.'),
  mentorId: Yup.string().required('This field is required.'),
})

const initialValues = {
  displayId: '',
  groupName: '',
  mentorId: '',
}

const MentorAddModal = (props) => {
  const { show, handleClose } = props
  const [triggerSearch] = useSearchLecturersMutation()
  const [triggerAdd] = useAddNewMentorGroupMutation()
  const dispatch = useDispatch()

  const searchLecturers = async (inputValue) => {
    const lecturers = await triggerSearch(inputValue).unwrap()
    return lecturers.map((lecturer) => ({
      value: lecturer.id,
      label: lecturer.name,
    }))
  }

  const handleSubmit = async (values, actions) => {
    try {
      const { groupId } = await triggerAdd(values).unwrap()
      handleClose()
      dispatch(setSelectedMentorId(groupId))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new mentor group</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form
            noValidate
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <Modal.Body>
              <FastField
                name="groupName"
                component={InputField}
                label="New group name"
                placeholder="ITCS K18..."
              />
              <FastField
                name="displayId"
                component={InputField}
                label="New group ID"
                placeholder="ITCSK18..."
              />
              <FastField
                name="mentorId"
                component={AsyncSelectField}
                loadOptions={searchLecturers}
                label="Select mentor"
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {formikProps.isSubmitting && (
                  <Spinner
                    animation="border"
                    as="span"
                    role="status"
                    size="sm"
                  />
                )}
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default MentorAddModal
