import React from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [values, setValues] = useState({
    "firstName": '',
    'lastName': '',
    'email': '',
  })

  const [submitted, setSubmitted] = useState(true)
  const [valid , setValid] = useState(false)

  const handleFirstNameInput = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInput = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInput = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(values.firstName && values.lastName && values.email)
    setValid(true)
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid? <div className="success-message">Success! Thank for registrating</div> : null }
        <input
          onChange={handleFirstNameInput}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"/>
          {submitted && !values.firstName ? <span>Please enter first name</span> : null}
        <input
          onChange={handleLastNameInput}
          value={values.lastName}
          className='form-field'
          placeholder='Last Name'
          name='lastName' />
          {submitted && !values.lastName ? <span>Please enter last name</span> : null}
        <input
          onChange={handleEmailInput}
          value={values.email}
          className='form-field'
          placeholder='Email'
          name='email' />
          {submitted && !values.email ? <span>Please enter email</span> : null}
        <button
          className='form-field'
          type='submit'>Register
        </button>
      </form>

    </div>
  );
}

export default App;
