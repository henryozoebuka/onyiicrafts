import React from 'react'
import './Product.css'

const Product = ({ displayProduct, image, name, price, addToCart }) => {
    return (
        <div className='product' onClick={displayProduct}>
            <div className='image-div'><img src={image} alt={name} /></div>
            <div className='contents-wrapper'>
                <div className='name'>{name}</div>
                <div className='product-contents-divider'></div>
                <div className='product-contents'>
                    <div className='product-price'><p className='product-prices-p'>${price}</p></div>
                    <div className='product-contents-divider-vertical'></div>
                    <div className='product-add-to-cart'><a href={addToCart}>Add To Cart</a></div>
                </div>
            </div>
        </div>
    )
}

export default Product