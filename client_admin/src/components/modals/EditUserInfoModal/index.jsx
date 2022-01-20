import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../../components/custom-fields/InputField'

const validationSchema = Yup.object().shape({
  displayId: Yup.string().required('This field is required.'),
  name: Yup.string().required('This field is required.'),
  address: Yup.string().required('This field is required.'),
})

const EditUserInfoModal = ({
  title,
  show,
  handleClose,
  handleSubmit,
  initialValues,
}) => {
  const onSubmit = async (values, actions) => {
    try {
      await handleSubmit(values)
      handleClose()
    } catch (e) {
      console.log(e)
      // actions.setFieldError('id', e)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
                name="displayId"
                component={InputField}
                label="User ID"
                placeholder="ITITIU18302"
              />
              <FastField
                name="name"
                component={InputField}
                label="Fullname"
                placeholder="Le Van A..."
              />
              <FastField
                name="address"
                component={InputField}
                label="Address"
                placeholder="District 5, Ho Chi Minh City..."
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

export default EditUserInfoModal
