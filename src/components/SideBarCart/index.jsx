import React from 'react'
import './side-bar-cart.css'

const SideBarCart = ({cartContents}) => {
  return (
    <div className='side-bar-cart'>
        <div className='side-bar-cart-contents'><p>{cartContents}</p></div>
    </div>
  )
}

export default SideBarCart