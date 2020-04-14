
const getInputStateStyle = (options: any) => {
  if (!options.errorStyle) {
    options.errorStyle = { border: '#e66262 1px solid' }
  }

  if (!options.validStyle) {
    options.validStyle = {
      border: '#e0dfdf 1px solid'
    }
  }

  return options
}


export default getInputStateStyle
