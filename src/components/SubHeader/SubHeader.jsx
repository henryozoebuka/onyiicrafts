import React from 'react'
import './SubHeader.css'
import backgroundImage from '../../assets/images/product_gallery_10.jpg';

const SubHeader = () => {
  return (
    <div className='sub-header'><img src={backgroundImage} alt="sub header background" /></div>
  )
}

export default SubHeader