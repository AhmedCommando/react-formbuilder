import React from 'react'

interface LabelFieldInterface {
  htmlFor?: string
  className: string
  placeholder: string
}

const LabelInput = ({htmlFor, className = '', placeholder}: LabelFieldInterface) => {
  return (
    <label htmlFor={htmlFor} className={className}>{placeholder}</label>
  )
}

export default LabelInput
