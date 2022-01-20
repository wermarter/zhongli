import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../../components/custom-fields/InputField'
import { useAddNewFacultyMutation } from '../../../../app/api/group/facultySlice'
import { setSelectedFacultyId } from '../../../../app/pageSlice'
import { useDispatch } from 'react-redux'

const validationSchema = Yup.object().shape({
  displayId: Yup.string().required('This field is required.'),
  facultyName: Yup.string().required('This field is required.'),
})

const initialValues = {
  displayId: '',
  facultyName: '',
}

const FacultyAddModal = (props) => {
  const { show, handleClose } = props
  const [triggerAdd] = useAddNewFacultyMutation()
  const dispatch = useDispatch()

  const handleSubmit = async (values, actions) => {
    try {
      const { groupId } = await triggerAdd(values).unwrap()
      handleClose()
      dispatch(setSelectedFacultyId(groupId))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new faculty</Modal.Title>
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
                name="facultyName"
                component={InputField}
                label="New faculty name"
                placeholder="School of Computer Science and Engineering..."
              />
              <FastField
                name="displayId"
                component={InputField}
                label="New faculty ID"
                placeholder="CSE..."
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

export default FacultyAddModal
