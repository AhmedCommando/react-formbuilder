import React, { useState, useEffect } from 'react'

import { FormRulesInterface } from './FormRulesInterface'
import { TextField } from './inputs'

export const FormBuilder = (formRules: FormRulesInterface[]) => {
  const [values, setValues] = useState({})

  useEffect(() => {
    console.error(values)
  }, [values]);

  const getInputType = (props: FormRulesInterface) => {
    props.setValue = (name, value) => setValues({ ...values, [name]: value })
    switch (props.type) {
      case 'text':
      case 'textArea':
        return (
          <TextField {...props} />
        )
      default:
        return (<h1>Not implemented yet!</h1>)
    }
  }

  return (
    <div>
      {formRules.map((rule) => getInputType(rule))}
    </div>
  )
}
