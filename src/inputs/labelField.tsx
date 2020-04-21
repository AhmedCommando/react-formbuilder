import React from 'react'

interface LabelFieldInterface {
  label: string
  htmlFor?: string
  style?: string
  className?: string
}

const LabelInput = ({htmlFor, className, style, label}: LabelFieldInterface) => {
  return (<label {...htmlFor} {...className} {...style}>{label}</label>)
}

export default LabelInput
