import React from 'react'

import { FormBuilder } from 'react-formbuilder'

import FormRules from './exampleForm'

import 'react-formbuilder/dist/index.css'

const App = () => {

  return (
    <div className="container">
      <form className="form-group">
        <FormBuilder formRules={FormRules} />
      </form>
    </div>
  )
}

export default App
