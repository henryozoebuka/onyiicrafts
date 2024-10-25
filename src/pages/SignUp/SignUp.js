import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import {useSelector} from 'react-redux'

const SignUp = () => {
  const {serverURL} = useSelector(state => state.serverURL)
  const [signUpData, setSignUpData] = useState({})

  const handleChange = (e) => {
    setSignUpData({...signUpData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post(`${serverURL}/createUser`, signUpData)
      if (response.status === 201) {
        alert(response.data.message)
        setSignUpData({
          username: '',
          firstname: '',
          lastname: '',
          password: '',
          phoneNumber: '',
          gender: '',
          email: '',
          approvalCode: '',
        })
      } 

    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert(error.response.data.message)
        }
      }
      console.error('An error occurred while signing up: ', error)
    }
  }

  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <p className='signup-title'>sign up</p>
        <form onSubmit={handleSubmit} className='staff-area-form'>
          <input type='text' value={signUpData.username} onChange={handleChange} placeholder='Username' name='username' className='signup-username-input' />
          <input type='text' value={signUpData.firstname} onChange={handleChange} placeholder='Firstname' name='firstname' className='signup-firstname-input' />
          <input type='text' value={signUpData.lastname} onChange={handleChange} placeholder='Lastname' name='lastname' className='signup-lastname-input' />
          <input type='text' value={signUpData.email} onChange={handleChange} placeholder='Email' name='email' className='signup-email-input' />
          <input type='password' value={signUpData.password} onChange={handleChange} placeholder='Password' name='password' className='signup-password-input' />
          <input type='number' value={signUpData.phoneNumber} onChange={handleChange} placeholder='Phone number' name='phoneNumber' className='signup-phone-number-input' />
          <select id='gender' value={signUpData.gender} onChange={handleChange} name='gender'>
            <option value="" disabled selected>Select your gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <input type='text' value={signUpData.approvalCode} onChange={handleChange} placeholder='Approval Code' name='approvalCode' className='signup-approval-code-input' />
          <input type='submit' className='signup-submit-button' />
        </form>
      </div>
    </div>
  )
}

export default SignUp