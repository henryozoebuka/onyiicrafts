import React from 'react'
import './small-card.css'

const SmallCard = ({image, title, description}) => {
  return (
    <div className='small-card'>
        <div className='small-card-image-div'>
            <img src={image} alt={title} />
        </div>
        <div className='small-card-contents-div'>
            <p style={{fontSize: '1.5rem', margin: 0 }}>{title}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SmallCard