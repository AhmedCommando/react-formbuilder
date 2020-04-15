interface ValueEventInterface {
  (name: string, value: string | boolean): void;
}

export interface ValidationRulesInterface {
  minLength ?: number
  isRequired ?: boolean
  isEmail ?: boolean
}

export interface FormRulesOptionsInterface {
  errorStyle?: any
  validStyle ?: any
  debounce ?: number
}

export interface FormRulesInterface {
  type: string
  name: string
  placeholder: string
  errorMessage: string,
  className: string,
  options: FormRulesOptionsInterface,
  validationRules ?: ValidationRulesInterface,
  setValue: ValueEventInterface;
}
