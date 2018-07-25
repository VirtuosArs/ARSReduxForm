import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'
import isValidEmail from 'sane-email-validation'
import provinces from '../data/provinces'

const validate = values => {
  const errors = {}
  
  if (!values.province) {
    errors.province = 'Required'
  }
  return errors
}

const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label} />
)

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
  </select>
)

let DemoSelect = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="province" label="Select Location" component={RenderSelect}>
      <option />
      {provinces.map(province =>
        <option key={province} value={province}>
          {province}
        </option>
      )}
    </Field>
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>

DemoSelect = reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  validate
})(DemoSelect)
export default DemoSelect
