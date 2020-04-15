import { ValidationRulesInterface } from './../FormRulesInterface';
const validate = (value: string | boolean, error: string, rules: any) => {
  let isValid = true;

  if (typeof value === 'boolean') {
    return validateBooleanType(value, error, rules)
  }

  for (const rule in rules) {
      switch (rule) {
          case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
          case 'isRequired': isValid = isValid && requiredValidator(value); break;
          case 'isEmail': isValid = isValid && emailValidator(value); break;
          default: isValid = true;
      }

  }

  return {isValid, error};
}

const validateBooleanType = (value: boolean, error: string, rules: ValidationRulesInterface) => {
  let isValid = true

  for (const rule in rules) {
    switch (rule) {
        case 'isRequired': isValid = isValid && value; break;
        default: isValid = true;
    }
  }

  return {isValid, error}
}



/**
* minLength Val
* @param  value
* @param  minLength
* @return
*/
const minLengthValidator = (value: string, minLength: number) => {
  return value.length >= minLength;
}

/**
* Check to confirm that field is required
*
* @param  value
* @return
*/
const requiredValidator = (value: string) => {
  return value.trim() !== '';
}

/**
* Email validation
*
* @param value
* @return
*/
const emailValidator = (value: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}



export default validate;
