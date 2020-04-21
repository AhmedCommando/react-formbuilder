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

export interface RadioGroupInterface {
  value: string
  label: string
  className?: string
  style?: {}
}

export interface FormRulesInterface {
  type: string
  name: string
  placeholder: string
  className: string,

  errorMessage?: string,
  options?: FormRulesOptionsInterface,
  validationRules ?: ValidationRulesInterface,
  htmlFor?: string
  group?: RadioGroupInterface[]

  setValue?: ValueEventInterface;
}
