import React, { useState, useEffect } from 'react'

import { FormRulesInterface } from '../FormRulesInterface'
import { getInputStateStyle, validate } from '../helpers'

interface NameValueInterface {
  name: string
  value: string
}

const TextField = ({
  type,
  name,
  placeholder,
  errorMessage,
  options,
  validationRules,
  className,
  setValue
}: FormRulesInterface) => {
  const [content, setContent] = useState({ name: '', value: '' });
  const [error, setError] = useState('')
  const [debounce, setDebounce] = useState(500)
  const [timer, setTimer] = useState<NodeJS.Timer | undefined>();

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const { name, value } = content
    setTimer(setTimeout(() => {
      if (name && value) {
        console.error('houni')
        valueHandler(name, value);
      }
    }, debounce));
  }, [content]);



  const valueHandler = (name: string, value: string) => {
    console.error('value', value)
    const { isValid, error } = validate(value, errorMessage, validationRules)
    setValue(name, value)
    if (isValid) {
      setError('')
      return
    }

    setError(error)
  }

  const publishEvent = ({ name, value}: NameValueInterface) => {
    if (!options || !options.debounce || !value.length) {
      valueHandler(name, value)
      return
    }

    setDebounce(options.debounce)
    setContent({ name, value })
  }

  const getInputField = () => {
    const { errorStyle, validStyle } = getInputStateStyle(options)
    switch (type) {
      case 'text':
      case 'email':
        return (
          <input
            type={type}
            name={name}
            style={error ? errorStyle : validStyle}
            className={className}
            onChange={({ target: { name, value } }) => publishEvent({ name, value })}
            onBlur={({ target: { name, value } }) => publishEvent({ name, value })}
            placeholder={placeholder} />
        )
      case 'textArea':
        return (
          <textarea
            name={name}
            cols={30}
            rows={7}
            className={className}
            onChange={({ target: { name, value } }) => publishEvent({ name, value })}
            onBlur={({ target: { name, value } }) => publishEvent({ name, value })}
            placeholder={placeholder}></textarea>
        )
      default:
        return
    }
  }

  return (
    <div className="form-group">
      <span id="error" className="info">{error}</span>
      {getInputField()}
    </div>
  )
}


export default TextField
