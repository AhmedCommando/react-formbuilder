

const labelField = {
  type: 'label',
  htmlFor: 'labelTest',
  placeholder: 'Label Test'
}

const TextField = {
  type: 'text',
  name: 'userName',
  placeholder: 'Your Name',
  className: 'form-control',
  errorMessage: 'This field is required. Min is 4 characteres!',
  validationRules: {
    minLength: 4,
    isRequired: true
  },
  options: {
    debounce: 500
  }
}

const EmailField = {
  type: 'email',
  name: 'email',
  placeholder: 'Your Email',
  className: 'form-control',
  errorMessage: 'This field is required. Email syntax is wrong!',
  validationRules: {
    isRequired: true,
    isEmail: true
  },
  options: {
    debounce: 500
  }
}


const CheckboxField = {
  type: 'checkbox',
  name: 'checkbox',
  className: 'form-control',
  errorMessage: 'This field is required!',
  validationRules: {
    // isRequired: true,
  },
  options: {
    debounce: 500
  }
}

const TextAreaField = {
  type: 'textArea',
  name: 'description',
  placeholder: 'Your Message',
  className: 'form-control',
  errorMessage: 'This field is required. Min length is 10 charachters!',
  validationRules: {
    minLength: 10,
    isRequired: true
  },
  options: {
    debounce: 500
  }
}


const RadioBoxField = {
  type: 'radioOption',
  name: 'gender',
  className: 'form-control',
  errorMessage: 'This field is Required!',
  group: [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'alien', label: 'Alien'}
  ],
  validationRules: {
    isRequired: true
  }
}

const FormRules = {
  ...labelField,
  ...TextField,
  ...EmailField,
  ...CheckboxField,
  ...TextAreaField,
  ...RadioBoxField
}


export default FormRules
