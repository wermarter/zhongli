import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../../components/custom-fields/InputField'
import { useNavigate } from 'react-router-dom'
import { useAddNewFacultyMutation } from '../../../../app/api/group/facultySlice'

const validationSchema = Yup.object().shape({
  facultyName: Yup.string().required('This field is required.'),
  facultyDescription: Yup.string().required('This field is required.'),
})

const initialValues = {
  facultyName: '',
  facultyDescription: '',
}

const FacultyAddModal = (props) => {
  const { show, handleClose } = props
  const [triggerAdd] = useAddNewFacultyMutation()
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    const { groupId } = await triggerAdd(values).unwrap()
    handleClose()
    navigate(`/faculty/${groupId}`)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new course</Modal.Title>
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
                placeholder="Intro to computing..."
              />
              <FastField
                name="facultyDescription"
                component={InputField}
                label="Faculty description"
                placeholder="Located at room A1.111, established in 2007..."
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
