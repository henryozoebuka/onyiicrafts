import React from 'react'
import './footer.css'
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook-svg.svg'
import { ReactComponent as InstagramSVG } from '../../assets/images/instagram-svg.svg'
import { ReactComponent as XSVG } from '../../assets/images/x-svg.svg'
import { ReactComponent as PinterestSVG } from '../../assets/images/pinterest-svg.svg'
import { ReactComponent as TelegramSVG } from '../../assets/images/telegram-svg.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <p className='footer-title'>FOLLOW US</p>
        <p className='footer-text'>Inspiration drawn from vintage mountaineering. We put a modern<br />take on classic and quality pieces.</p>
        <div className='footer-svgs'>
            <a href='https://facebook.com' target="_blank" rel="noopener noreferrer"><FacebookSVG /></a>
            <a href='https://instagram.com' target="_blank" rel="noopener noreferrer"><InstagramSVG /></a>
            <a href='https://x.com' target="_blank" rel="noopener noreferrer"><XSVG /></a>
            <a href='https://pinterest.com' target="_blank" rel="noopener noreferrer"><PinterestSVG /></a>
            <a href='https://telegram.org' target="_blank" rel="noopener noreferrer"><TelegramSVG /></a>
        </div>
    </div>
  )
}

export default Footer