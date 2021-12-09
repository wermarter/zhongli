import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../../components/custom-fields/InputField'
import AsyncSelectField from '../../../../components/custom-fields/AsyncSelectField'
import { useSearchLecturersMutation } from '../../../../app/api/user/lecturerSlice'
import { useAddNewCourseMutation } from '../../../../app/api/group/courseSlice'
import { setSelectedCourseId } from '../../../../app/pageSlice'
import { useDispatch } from 'react-redux'

const validationSchema = Yup.object().shape({
  courseName: Yup.string().required('This field is required.'),
  timeSlot: Yup.number().required('This field is required.'),
  lecturerId: Yup.string().required('This field is required.'),
})

const initialValues = {
  courseName: '',
  timeSlot: 0,
  lecturerId: '',
}

const CourseAddModal = (props) => {
  const { show, handleClose } = props
  const [triggerSearch] = useSearchLecturersMutation()
  const [triggerAdd] = useAddNewCourseMutation()
  const dispatch = useDispatch()

  const searchLecturers = async (inputValue) => {
    const lecturers = await triggerSearch(inputValue).unwrap()
    return lecturers.map((lecturer) => ({
      value: lecturer.id,
      label: lecturer.name,
    }))
  }

  const handleSubmit = async (values) => {
    try {
      const { groupId } = await triggerAdd(values).unwrap()
      handleClose()
      dispatch(setSelectedCourseId(groupId))
    } catch (e) {
      console.log(e)
    }
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
                name="courseName"
                component={InputField}
                label="New course name"
                placeholder="Intro to computing..."
              />
              <FastField
                name="timeSlot"
                component={InputField}
                type="number"
                label="Time slot"
                placeholder="1-112..."
              />
              <FastField
                name="lecturerId"
                component={AsyncSelectField}
                loadOptions={searchLecturers}
                label="Select lecturer"
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

export default CourseAddModal
