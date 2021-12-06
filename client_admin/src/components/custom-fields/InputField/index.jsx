import Form from 'react-bootstrap/Form'
import { ErrorMessage } from 'formik'

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props
  const { errors, touched } = form
  const { name } = field
  const showError = errors[name] && touched[name]

  return (
    <Form.Group className="mb-2">
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        isInvalid={showError}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>
        )}
      />
    </Form.Group>
  )
}

export default InputField
