import React, { useState } from 'react'
import './ProductView.css'
import menuIconClose from '../../assets/images/menu-icon-close.png';


const ProductView = ({ productImages, description, handleClose }) => {
    const [currentImage, setCurrentImage] = useState('')
    const handleImageClick = (image) => {
        setCurrentImage(image)
    }

    return (
        <div className='product-view'>
            <div className='product-view-main-sub'>
                <div className='product-view-close-icon-div' onClick={handleClose}><img src={menuIconClose} alt="close-button" /></div>
                <div className='product-view-sub'>
                    {/* image side */}
                    <div className='product-view-images-section'>
                        <div className='product-view-currentImage'>{productImages && <img src={currentImage ? currentImage : productImages[0].image} alt='Test' />}</div>
                        <div className='product-view-productimages'>{productImages && productImages.map((productImage, index) => (
                            <div className='product-view-thumbnail' onClick={() => handleImageClick(productImage.image)} >
                                <img src={productImage?.image} alt={productImage?.title} key={index} />
                            </div>
                        ))}</div>
                    </div>

                    {/* texts side */}
                    <div className='product-view-product-description'>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>Product Description</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView