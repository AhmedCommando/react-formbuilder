import * as React from 'react'
import styles from './styles.module.css'
import { FormRulesInterface } from './FormRulesInterface'



export const FormBuilder = (formRules: FormRulesInterface[]) => {

  const getInputType = ({type, name, placeholder, }) => {
    switch type {
      case 'text':
      case 'textArea':

    }
  }

  return (
    {formRules.map((rule) => )}

  )
}
