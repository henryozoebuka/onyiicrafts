import React from 'react'
import './Contact.css'
import GetInTouch from '../../components/GetInTouch/GetInTouch.jsx'
import EmailSection from '../../components/EmailSection/EmailSection.jsx'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <GetInTouch />
        <EmailSection />
      </div>
    </div>
  )
}

export default Contact