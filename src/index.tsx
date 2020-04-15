import React, { useState, useEffect } from 'react'

import { FormRulesInterface } from './FormRulesInterface'
import { TextField } from './inputs'

export const FormBuilder = (props: { [formRules: string]: FormRulesInterface[] }) => {
  const { formRules } = props
  const [values, setValues] = useState({})

  useEffect(() => {
    console.error(values)
  }, [values]);

  const getInputType = ({ type, name, placeholder, errorMessage, options, validationRules, className }: FormRulesInterface, index: number) => {
    switch (type) {
      case 'text':
      case 'textArea':
        return (
          <TextField key={index}
            type={type}
            name={name}
            placeholder={placeholder}
            errorMessage={errorMessage}
            options={options || {}}
            validationRules={validationRules}
            className={className}
            setValue={(name, value) => setValues({ ...values, [name]: value })} />
        )
      default:
        return (<h1>Not implemented yet!</h1>)
    }
  }

  return (
    <div>
      {formRules.map((rule, index) => getInputType(rule, index))}
    </div>
  )
}
