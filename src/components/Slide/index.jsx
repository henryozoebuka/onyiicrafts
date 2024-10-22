import React from 'react'
import './slide.css'

const Slide = ({image, price, title, description, addToCart}) => {
  return (
    <div className='slide'>
        <img src={image} download alt={title}/>
        <div className='contents'>
            <h3 className='price'>{price}</h3>
            <div className='divider'></div>
            <h3 className='product-title'>{title}</h3>
            <p className='description'>{description}</p>
            <div className='divider'></div>
            <p className='add-to-cart'><a href='#cart'>{addToCart}</a></p>
        </div>
    </div>
  )
}

export default Slide