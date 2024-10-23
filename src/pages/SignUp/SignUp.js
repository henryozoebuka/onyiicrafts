import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <p className='signup-title'>sign up</p>
        <form className='staff-area-form'>
          <input type='text' placeholder='Username' className='signup-username-input' />
          <input type='password' placeholder='Password' className='signup-password-input' />
          <input type='number' placeholder='Phone number' className='signup-phone-number-input' />
          <select id='name' name='gender'>
            <option value="" disabled selected>Select your gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <input type='submit' className='signup-submit-button' />
        </form>
      </div>
    </div>
  )
}

export default SignUp