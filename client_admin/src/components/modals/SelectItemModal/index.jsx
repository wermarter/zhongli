import * as Yup from 'yup'
import { FastField, Formik } from 'formik'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import AsyncSelectField from '../../../components/custom-fields/AsyncSelectField'

const validationSchema = Yup.object().shape({
  itemId: Yup.string().required('This field is required.'),
})

const initialValues = {
  itemId: '',
}

const SelectItemModal = ({
  title,
  show,
  handleClose,
  handleSubmit,
  handleSearchItems,
}) => {
  const onSubmit = async (values, actions) => {
    try {
      await handleSubmit(values.itemId)
      handleClose()
    } catch (e) {
      console.log(e)
      // actions.setFieldError('itemId', e)
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
                name="itemId"
                component={AsyncSelectField}
                loadOptions={handleSearchItems}
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

export default SelectItemModal
