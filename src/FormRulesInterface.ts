interface ValueEventInterface {
  (name: string, value: string): void;
}

export interface FormRulesInterface {
  type: string
  name: string
  placeholder: string
  errorMessage: string,
  className: string,
  options?: {
    errorStyle?: any
    validStyle ?: any
    debounce ?: number
  },
  validationRules ?: {
    minLength ?: number
    isRequired ?: boolean
    isEmail ?: boolean
  },
  setValue: ValueEventInterface;
}
