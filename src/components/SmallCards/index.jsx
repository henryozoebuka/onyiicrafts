import React from 'react'
import './small-cards.css'
import SmallCard from '../SmallCard'
import iconImage1 from '../../assets/images/iconImage1.PNG'
import iconImage2 from '../../assets/images/iconImage2.PNG'
import iconImage3 from '../../assets/images/iconImage3.PNG'

const SmallCards = () => {
    return (
        <div className='small-cards'>
            <SmallCard image={iconImage1} title={'Materials'} description={'Inspiration drawn from vintage mountaineering. We put a modern take on classic pieces.'} />
            <SmallCard image={iconImage2} title={'Custom Design'} description={"The brand's signature is undivided attention to detail. Inspiration drawn from vintage high quality leather."} />
            <SmallCard image={iconImage3} title={'Tools'} description={'There seems to be an infinite number of projects which we have been working on at the moment.'} />
        </div>
    )
}

export default SmallCards