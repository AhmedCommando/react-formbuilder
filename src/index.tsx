import React, { useState, useEffect } from 'react'

import { FormRulesInterface } from './FormRulesInterface'
import { TextField, CheckBoxField } from './inputs'


export const FormBuilder = (props: { [formRules: string]: FormRulesInterface[] }) => {
  const { formRules } = props
  const [values, setValues] = useState({})

  useEffect(() => {
    console.error('===>', values)
  }, [values]);


  const isFormRulesValid = () => {
    const duplicates = formRules.filter((rule, index, self) =>
      index !== self.findIndex((obj) => (
        obj.name === rule.name
      ))
    )

    if (duplicates && duplicates.length) {
      return {
        isValid: false,
        error: 'Duplicate input field name',
        duplicates
      }
    }

    return {
      isValid: true
    }
  }

  const getInputType = ({ type, name, placeholder, errorMessage, options, validationRules, className }: FormRulesInterface, index: number) => {
    switch (type) {
      case 'text':
      case 'email':
      case 'textArea':
        return (
          <TextField
            key={index}
            type={type}
            name={name}
            placeholder={placeholder}
            errorMessage={errorMessage}
            options={options || {}}
            validationRules={validationRules}
            className={className}
            setValue={(name, value) => setValues({ ...values, [name]: value })} />
        )
      case 'checkbox':
        return (
          <CheckBoxField
            key={index}
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

  const { isValid, error, duplicates } = isFormRulesValid()

  return (
    <div>
      {
        isValid ? formRules.map((rule, index) => getInputType(rule, index)) : (
          <div>
            <h3>Form is not valid</h3>
            <h6>Error: {error}</h6>
            <h6>Duplicate Name: {duplicates?.map(dup => dup.name).join(', ')}</h6>
          </div>
        )}
    </div>
  )
}
