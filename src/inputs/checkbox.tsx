import React, { useState } from 'react'

import { FormRulesInterface } from '../FormRulesInterface'
import { validate } from '../helpers';


interface InputEventInterface {
  name: string
  checked: boolean
}

export const CheckBoxField = ({
  type,
  name,
  errorMessage,
  validationRules,
  className,
  setValue
}: FormRulesInterface) => {
  const [error, setError] = useState('')

  const valueHandler = (name: string, value: boolean) => {
    const { isValid, error } = validate(value, errorMessage, validationRules)
    if (isValid) {
      setError('')
      setValue(name, value)
      return
    }

    setError(error)
  }

  const publishEvent = ({ name, checked }: InputEventInterface) => {
    valueHandler(name, checked)


    /* setContent((prev) => {
      console.log('checkboxxx', { ...prev, name, checked });

      return ({ ...prev, name, checked })
    }) */
  }

  return (
    <div className="form-group">
      <span id="error" className="info">{error}</span>
      <input
        type={type}
        className={className}
        name={name}
        onChange={({ target: { name, checked } }) => publishEvent({ name, checked })}
      />
    </div>
  )

}


export default CheckBoxField
