import React from 'react'

import { FormRulesInterface, RadioGroupInterface } from '../FormRulesInterface'
import LabelInput from './labelField'


const RadioOption = ({
    type,
    name,
    errorMessage,
    validationRules,
    className,
    group,
    setValue
  }: FormRulesInterface) => {



    return (
      <div>
        { group && group.map(({value, label, className, style}: RadioGroupInterface) => (
          <p>
            <LabelInput {...name} {...label} {...className} {...style} />
            <input type="radio" name={name} value={value} />
          </p>))
        }
      </div>
    )
}

export default RadioOption
