import React from 'react'

import { FormBuilder } from 'react-formbuilder'
import 'react-formbuilder/dist/index.css'

const App = () => {
  const formRules = [
    {
      type: 'label',
      htmlFor: 'labelTest',
      placeholder: 'Label Test'
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
  ];

  return (
    <div className="container">
      <form className="form-group">
        <FormBuilder formRules={formRules} />
      </form>
    </div>
  )
}

export default App
