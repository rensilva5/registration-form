import React, { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState({
    name: '',
    lastName: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleNameInputChange = (event) => {
    setValue({...value, name: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValue({...value, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValue({...value, email: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (value.name && value.lastName && value.email) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        { submitted && valid ? <div className="succes-message">Success! Thank you for registering</div> : null}
        <input
        onChange={handleNameInputChange}
        value={value.name}
        className="form-field"
        placeholder="Name"
        name="Name"
        />
        {submitted & !value.name ? <span>Please enter Name</span> : null }
        <input
        onChange={handleLastNameInputChange}
        value={value.lastName}
        className="form-field"
        placeholder="Last Name"
        name="Last Name"
        />
        { submitted && !value.lastName ? <span>Please enter  last name</span> : null }
        <input
        onChange={handleEmailInputChange}
        value={value.email}
        className="form-field"
        placeholder="Email"
        name="email"
        />
        {submitted && !value.email ? <span>Please enter email</span> : null }
        <button className='button-register' onClick=''>Register</button>
        </form>
    </div>
    )
  }
export default App

