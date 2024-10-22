import React from 'react'
import './gallery.css'
import image1 from '../../assets/images/product_highlight_04.jpg'
import image2 from '../../assets/images/product_gallery_06.jpg'
import image3 from '../../assets/images/product_gallery_07.jpg'
import image4 from '../../assets/images/product_gallery_08.jpg'
import image5 from '../../assets/images/product_gallery_09.jpg'
import GalleryImage from '../GalleryImage'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryImage image={image1} name={'Curvy Bowl'} price={'$17.10'} addToCart={'Add to cart'}/>
            <GalleryImage image={image2} name={'Pop Cherie'} price={'$18.10'} addToCart={'Add to cart'}/>
            <GalleryImage image={image3} name={'Wood pipe'} price={'$12.10'} addToCart={'Add to cart'}/>
            <GalleryImage image={image4} name={'Cherry Bowl'} price={'$19.10'} addToCart={'Add to cart'}/>
            <GalleryImage image={image5} name={'Wooden Pestle'} price={'$11.10'} addToCart={'Add to cart'}/>
        </div>
        // </div>
    )
}

export default Gallery