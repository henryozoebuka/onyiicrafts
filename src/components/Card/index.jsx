import React from 'react'
import './card.css'

const Card = ({ backgroundImage, cardTitleColor, descriptionColor, backgroundColor, cardTitle, borderColor, description, viewButtonText, linkColor }) => {
    return (
        <div className='card' style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '20px', position: 'relative', backgroundImage: `url(${backgroundImage})` }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: backgroundColor }}>
            </div>
            <div className='card-contents-container'>
                <div className='card-contents'>
                    <p style={{ color: cardTitleColor, fontSize: '2rem' }}>{cardTitle}</p>
                    <p style={{ color: descriptionColor, fontSize: '1rem' }}>{description}</p>
                    <div style={{ color: descriptionColor, borderWidth: 1, width: 'fit-content', paddingLeft: 20, paddingRight: 20, borderColor: borderColor, borderStyle: 'solid' }}><a href='#view' style={{ textDecoration: 'none', color: linkColor, fontSize: '1rem' }}>{viewButtonText}</a></div>
                </div>
                <div className='empty-content'></div>
            </div>
        </div>
    )
}

export default Card