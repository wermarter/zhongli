import { FastField, Formik } from 'formik'
import { Button, Card, Form, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import InputField from '../../components/custom-fields/InputField'
import * as Yup from 'yup'
import { adminLogin } from '../../app/authSlice'
import { useDispatch } from 'react-redux'

const validationSchema = Yup.object().shape({
  userId: Yup.string().required('This field is required.'),
  password: Yup.string().required('This field is required.'),
})

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = async (values, actions) => {
    try {
      const res = await dispatch(adminLogin(values)).unwrap()
      if (res?.message) {
        actions.setFieldError('password', res.message)
      } else {
        const returnUrl = location.state?.from?.pathname || '/'
        navigate(returnUrl, { replace: true })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Card
      border="secondary"
      className="my-5 mx-auto"
      style={{ width: '350px' }}
    >
      <Card.Header className="text-center text-white bg-primary">
        <h3>Login</h3>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={{
            userId: '',
            password: '',
          }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <Form
              noValidate
              onSubmit={formikProps.handleSubmit}
              onReset={formikProps.handleReset}
            >
              <FastField
                name="userId"
                label="User ID:"
                component={InputField}
              />
              <FastField
                name="password"
                label="Password:"
                type="password"
                component={InputField}
              />
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
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}

export default Login
