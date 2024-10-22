import React from 'react'
import './customer-review.css'

const CustomerReview = ({title, description, customerName, role}) => {
  return (
    <div className='customer-review'>
        <div className='customer-review-contents'>
            <p className='invited-comma'>"</p>
            <p className='customer-review-contents-title'>{title}</p>
            <p className='customer-review-contents-description'>{description}</p>
            <div className='customer-review-contents-divider'></div>
            <p className='customer-review-contents-name'>{customerName}</p>
            <p className='customer-review-contents-description'>{role}</p>
        </div>
    </div>
  )
}

export default CustomerReview