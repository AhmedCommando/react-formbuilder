import { FormRulesOptionsInterface } from "../FormRulesInterface"



const getInputStateStyle = (options: FormRulesOptionsInterface) => {
  const errorStyle = { border: '#e66262 1px solid' }
  const validStyle = { border: '#e0dfdf 1px solid' }

  if (!options) {
    options = {
      errorStyle,
      validStyle
    }
  }

  if (!options.errorStyle) {
    options = {
      ...options,
      errorStyle
    }
  }

  if (!options.validStyle) {
    options = {
      ...options,
      validStyle
    }
  }

  return options
}


export default getInputStateStyle
