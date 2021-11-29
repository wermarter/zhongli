import { ErrorMessage } from 'formik'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props
  const { name, onBlur, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  const optionValue = value
    ? options.find((option) => option.value === value)
    : null

  console.log({ options, value, optionValue })

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
      <Select
        id={name}
        onChange={handleSelectedOptionChange}
        onBlur={onBlur}
        value={optionValue}
        placeholder={placeholder}
        options={options}
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

export default SelectField
