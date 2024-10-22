import React from 'react'
import './profile-card.css'

const ProfileCard = ({image, title, subTitle, subTitleColor, description, signature}) => {
  return (
    <div className='profile-card'>
        <div className='profile-card-image-div'>
            <img src={image} alt={title} />
        </div>
        <div className='profile-card-contents-div'>
            <p style={{fontSize: '2rem', lineHeight: 1, margin: 0, marginTop: 5}}>{title}</p>
            <p style={{color: subTitleColor, lineHeight: 1}}>{subTitle}</p>
            <p>{description}</p>
            <img src={signature} alt={subTitle} />
        </div>
    </div>
  )
}

export default ProfileCard