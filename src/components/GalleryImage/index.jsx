import React from "react";
import './gallery-image.css'

const GalleryImage = ({ image, name, price, addToCart }) => {
    return (
        <div className="gallery-image">
            <div className="gallery-image-img">
                <img src={image} alt="" />
            </div>
            <div className="image-description">
                <div className="image-description-table">
                    <div className="image-description-name">{name}</div>
                    <div className="image-description-lower">
                        <div className="image-description-price">{price}</div>
                        <div className="image-description-addToCart"><a href="#addToCart">{addToCart}</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImage