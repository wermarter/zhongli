import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import InputField from '../../custom-fields/InputField'

const EditFieldModal = ({
  title,
  show,
  handleClose,
  handleSubmit,
  initialValues = '',
  isNumber = false,
}) => {
  const validationSchema = Yup.object().shape({
    singleField: isNumber
      ? Yup.number().required('This field is required.')
      : Yup.string().required('This field is required.'),
  })

  const onSubmit = async (values, actions) => {
    try {
      await handleSubmit(values.singleField)
      handleClose()
    } catch (e) {
      console.log(e)
      // actions.setFieldError('singleField', e)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          singleField: initialValues,
        }}
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
                name="singleField"
                component={InputField}
                type={isNumber ? 'number' : 'text'}
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

export default EditFieldModal
