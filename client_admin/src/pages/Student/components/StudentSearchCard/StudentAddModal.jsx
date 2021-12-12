import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../../components/custom-fields/InputField'
import AsyncSelectField from '../../../../components/custom-fields/AsyncSelectField'
import { useSearchFacultiesMutation } from '../../../../app/api/group/facultySlice'
import { useAddNewStudentMutation } from '../../../../app/api/user/studentSlice'
import { useDispatch } from 'react-redux'
import { setSelectedStudentId } from '../../../../app/pageSlice'

const validationSchema = Yup.object().shape({
  id: Yup.string().required('This field is required.'),
  name: Yup.string().required('This field is required.'),
  password: Yup.string().required('This field is required.'),
  passwordConfirmation: Yup.string().test(
    'passwords-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value
    },
  ),
  address: Yup.string().required('This field is required.'),
  facultyId: Yup.string().required('This field is required.'),
})

const initialValues = {
  id: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  address: '',
  facultyId: '',
}

const StudentAddModal = ({ show, handleClose }) => {
  const dispatch = useDispatch()
  const [triggerSearch] = useSearchFacultiesMutation()
  const [triggerAdd] = useAddNewStudentMutation()

  const searchFaculties = async (inputValue) => {
    const faculties = await triggerSearch(inputValue).unwrap()
    return faculties.map((faculty) => ({
      value: faculty.groupId,
      label: faculty.groupName,
    }))
  }

  const handleSubmit = async (values, actions) => {
    try {
      await triggerAdd(values).unwrap()
      handleClose()
      dispatch(setSelectedStudentId(values.id))
    } catch (e) {
      console.log(e)
      // actions.setFieldError('id', e)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new student</Modal.Title>
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
                name="id"
                component={InputField}
                label="Student ID"
                placeholder="ITITIU18302..."
              />
              <FastField
                name="name"
                component={InputField}
                label="Name"
                placeholder="Le Van A..."
              />
              <FastField
                name="address"
                component={InputField}
                label="Address"
                placeholder="District 5, Ho Chi Minh City..."
              />
              <FastField
                name="password"
                component={InputField}
                placeholder="New password..."
                type="password"
                label="Password"
              />
              <FastField
                name="passwordConfirmation"
                component={InputField}
                placeholder="Type password again..."
                type="password"
                label="Password confirmation"
              />
              <FastField
                name="facultyId"
                component={AsyncSelectField}
                loadOptions={searchFaculties}
                label="Faculty"
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

export default StudentAddModal
