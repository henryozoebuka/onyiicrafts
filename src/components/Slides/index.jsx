import React, { useState, useEffect } from 'react'
import './slides.css'
import Slide from '../Slide/index.jsx'
import image1 from '../../assets/images/product_highlight_04.jpg'
import image2 from '../../assets/images/product_gallery_06.jpg'
import image3 from '../../assets/images/product_gallery_07.jpg'
import image4 from '../../assets/images/product_gallery_08.jpg'
import image5 from '../../assets/images/product_gallery_09.jpg'

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prevSlide) => (prevSlide + 1))
    } else {
      setCurrentSlide(0)
    }
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); // Call nextSlide every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  });

  const slides = [
    { image: image1, price: '$10.30', title: 'Curvy Bowl', description: 'Reverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches', addToCart: 'Add To Cart' },
    { image: image2, price: '$20.30', title: 'Limited Edition Pop Cherie', description: 'Reverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches', addToCart: 'Add To Cart' },
    { image: image3, price: '$30.30', title: 'Limited Edition Wood Pipe', description: 'Reverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches', addToCart: 'Add To Cart' },
    { image: image4, price: '$40.30', title: 'Limited Edition Cherry Wood Bowl', description: 'Reverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches', addToCart: 'Add To Cart' },
    { image: image5, price: '$50.30', title: 'Limited Edition Wooden Pestle', description: 'Reverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches', addToCart: 'Add To Cart' }
  ]

  return (
    <div className='slides'>
      <div className='slides-contents' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides && slides.map((item, index) => (
          <Slide key={index} image={item.image} price={item.price} title={item.title} description={item.description} addToCart={item.addToCart} />
        ))}
      </div>
      <div >
        <div className='slide-indicator' >
          {slides && slides.map((dot, index) => (
            <div key={index} className='dotted' style={{ backgroundColor: currentSlide === index && '#cb9565' }}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slides