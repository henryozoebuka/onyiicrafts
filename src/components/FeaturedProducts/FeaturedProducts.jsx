import React from 'react'
import './FeaturedProducts.css'

const FeaturedProducts = ({image, title, price}) => {
    return (
        <div className='feature-products'>
            <div className='featured-products-contents'>
                <div className='featured-image-div'>
                <img src={image} alt={title} />
                </div>
                <div className='featured-products-texts'>
                    <p id='featured-products-texts-title'>{title}</p>
                    <p id='featured-products-texts-price'>{price}</p>
                </div>
            </div>
            <div className='featured-products-divider'></div>
        </div>
    )
}

export default FeaturedProducts