import React from 'react'
import './address.css'
import { ReactComponent as Svg1 } from '../../assets/images/address-svg.svg'
import { ReactComponent as Svg2 } from '../../assets/images/mail-send-svg.svg'
import { ReactComponent as Svg3 } from '../../assets/images/call-svg.svg'
import { ReactComponent as Svg4 } from '../../assets/images/email-svg.svg'
import officeWorkers from '../../assets/images/office-workers2.PNG'

const Address = ({ image, title, svg1, svg2, svg3, svg4 }) => {
    return (
        <div className='address'>

            {/* address image */}
            <div className='address-image'>
                <img src={officeWorkers} alt={title} />
            </div>

            {/* address text contents */}
            <div className='address-text-contents'>
                <div className='address-title'>
                    <p className='address-title-p1'>We are in Onitsha,<br />Anambra State</p>
                    <p className='address-title-p2'>Stop by, say hello,<br />we are open every day<br />from 2PM to 8PM.</p>
                </div>
            </div>

            {/* divider */}
            <div className='address-divider'></div>

            {/* address directions */}
            <div className='address-directions'>
                <a href='#address'>
                    <Svg1 />
                    <p>60A Old Market Road, Onitsha</p>
                </a>
                <a href='#address'>
                    <Svg2 />
                    <p>2 PM - 8 PM</p>
                </a>
                <a href='#address'>
                    <Svg3 />
                    <p>+234 803 598 778</p>
                </a>
                <a href='#address'>
                    <Svg4 />
                    <p>onyii@onyiicrafts.com.ng</p>
                </a>
            </div>
        </div>

    )
}

export default Address