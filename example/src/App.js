import React from 'react'

import { FormBuilder } from 'react-formbuilder'
import 'react-formbuilder/dist/index.css'

const App = () => {
  const formRules = [
    {
        type: 'text',
        name: 'userName',
        placeholder: 'Your name',
        errorMessage: 'This field is required. Min is 4 characteres!',
        validationRules: {
            minLength: 4,
            isRequired: true
        },
        options: {
          salam: 'ahmed',
          debounce: 500
        }
    }
  ];

  return <FormBuilder formRules={formRules} />
}

export default App
