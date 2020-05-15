import React, {useState, useEffect} from 'react'
import {operators} from "../helpers/RuleConfiguration";
import {attributeValidator, isRequired} from "../helpers/validators";

export default function Criteria(props) {
  // Create Form Obj to Watch on every user input
  const [form, setForm] = useState({
    key: props.rule.key,
    value: props.rule.value,
    opr: props.rule.opr,
  })

  // Create Error Obj to validate on every user input
  const [formError, setFormError] = useState({
    key: '',
    value: '',
    opr: ''
  })

  const validateError = (name, value) => {
    let error = ''
    switch (name) {
      case 'key':
        error = attributeValidator(value)
        break
      default:
        error = isRequired(value)
        break
    }

    setFormError(prevState => ({
      ...prevState,
      [name]: error
    }))

    return error
  }

  const updateCriteria = e => {
    let { name, value } = e.target
    const newFrom = {
      ...form,
      [name]: value
    }
    setForm(newFrom)
    validateError(name, value)
    props.onChange(props.index, newFrom)
  }

  useEffect(() => {
    // On mount of Every Criteria, Show validation upfront to user
    for (const prop in form) {
      validateError(prop, form[prop])
    }
  }, [])


  return (<div className="form-row rule-row">
    <div className="form-group col-md-4">
      <label>Config Attribute</label>
      <input
        type="text"
        className="form-control"
        name="key"
        value={form.key}
        onChange={updateCriteria}
      />
      {formError.key &&
      <span className="error">{formError.key}</span>}
    </div>
    <div className="form-group col-md-3">
      <label>Operation</label>
      <select className="form-control"
              name="opr"
              value={form.opr}
              onChange={updateCriteria}
      >
        <option value="">Choose...</option>
        {
          operators.map(optr => (
          <option key={optr.value}
          value={optr.value}
          label={optr.label} >
          </option>))
        }
      </select>
      {formError.opr &&
      <span className="error">{formError.opr}</span>}
    </div>
    <div className="form-group col-md-3">
      <label>Value</label>
      <input
        type="text"
        className="form-control"
        name="value"
        value={form.value}
        onChange={updateCriteria}
      />
      {formError.value &&
      <span className="error">{formError.value}</span>}
    </div>
  </div>)
}