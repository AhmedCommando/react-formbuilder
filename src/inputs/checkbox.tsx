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

  const valueHandler = ({ name, checked }: InputEventInterface) => {
    const { isValid, error } = validate(checked, errorMessage, validationRules)
    if (isValid) {
      setError('')
      setValue(name, checked)
      return
    }

    setError(error)
  }

  return (
    <div className="form-group">
      <span id="error" className="info">{error}</span>
      <input
        type={type}
        className={className}
        name={name}
        onChange={({ target: { name, checked } }) => valueHandler({ name, checked })}
      />
    </div>
  )

}


export default CheckBoxField
