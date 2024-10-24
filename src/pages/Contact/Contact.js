import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Contact.css'
import GetInTouch from '../../components/GetInTouch/GetInTouch.jsx'
import EmailSection from '../../components/EmailSection/EmailSection.jsx'

const Contact = () => {
  const { loggedIn } = useSelector(state => state.loggedIn)
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    console.log(loggedIn)
    console.log(user)
  })
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