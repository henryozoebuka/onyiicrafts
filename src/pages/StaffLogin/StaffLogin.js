import React from 'react'
import './StaffLogin.css'

const StaffArea = () => {
  return (
    <div className='staff-area'>
        <div className='staff-area-wrapper'>
            <p className='staff-area-title'>staff login</p>
            <form className='staff-area-form'>
                    <input type='text' placeholder='Username' className='staff-area-username-input'/>
                    <input type='password' placeholder='Password' className='staff-area-password-input'/>
                    <input type='submit' className='staff-area-submit-input'/>
            </form>
        </div>
    </div>
  )
}

export default StaffArea