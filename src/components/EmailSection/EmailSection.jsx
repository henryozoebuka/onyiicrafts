import React from 'react'
import './EmailSection.css'

const EmailSection = () => {
    return (
        <div className='email-section'>
            <form className='email-section-form'>
                <div className='email-section-name-email'>
                    <input type="text" placeholder='Name' className='email-section-name-input' />
                    <div className='email-section-vertical-divider'></div>
                    <input type="text" placeholder='Email' className='email-section-email-input' />
                </div>
                <div className='email-section-subject'>
                    <input type="text" placeholder='Subject' className='email-section-subject-input' />
                </div>
                <div className='email-section-text-area'>
                    <textarea rows='10' placeholder='Message' className='email-section-text-area-input' />
                </div>
                <div className='email-section-send'>
                    <button type='submit' className='email-section-send-button'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default EmailSection