import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import Form from '@/components/Forms/Form'
// import PropTypes from 'prop-types'

const schema = Yup.object().shape({
  username: Yup.string().email().required(),
  password: Yup.string().required(),
})
class Login extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting, dirty }) => (
          <Form>
            <Field name="username">
              {(props) => <input {...props.field} />}
            </Field>
            <Field name="password">
              {(props) => <input {...props.field} />}
            </Field>
            <button type="submit" disabled={!dirty || isSubmitting}>submit</button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default Login
