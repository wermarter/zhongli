import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../custom-fields/InputField'

const validationSchema = Yup.object().shape({
  password: Yup.string().required('This field is required.'),
  passwordConfirmation: Yup.string().test(
    'passwords-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value
    },
  ),
})

const initialValues = {
  password: '',
  passwordConfirmation: '',
}

const ChangePasswordModal = ({ title, show, handleClose, handleSubmit }) => {
  const onSubmit = async (values, actions) => {
    try {
      await handleSubmit(values.password)
      handleClose()
    } catch (e) {
      console.log(e)
      // actions.setFieldError('password', e)
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

export default ChangePasswordModal
