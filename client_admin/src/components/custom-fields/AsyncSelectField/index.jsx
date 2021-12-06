import { ErrorMessage } from 'formik'
import { Form } from 'react-bootstrap'
import AsyncSelect from 'react-select/async'

function AsyncSelectField(props) {
  const { field, form, label, placeholder, disabled, loadOptions } = props
  const { name, onBlur } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    }
    field.onChange(changeEvent)
  }

  return (
    <Form.Group className="mb-3">
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <AsyncSelect
        id={name}
        onChange={handleSelectedOptionChange}
        onBlur={onBlur}
        placeholder={placeholder}
        loadOptions={loadOptions}
        disabled={disabled}
        className={showError ? 'is-invalid' : ''}
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

export default AsyncSelectField
