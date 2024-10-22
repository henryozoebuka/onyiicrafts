import React, {useState} from 'react'
import './FilterByPrice.css'

const FilterByPrice = () => {
    const [priceRange, setPriceRange] = useState(90000)
    const handlePriceRangeValue = (e) => {
        setPriceRange(e.target.value)
    }

    return (
        <div className='filter-by-price'>
            <p className='filter-by-price-p'>Filter By Price</p>
            <p id='price-range-p'>$0 - ${priceRange}</p>
            <div className='filter-by-price-range-div'>
                <input type='range' className='filter-by-price-range' min='0' name='price-range' id='price-range' max='200000' onChange={handlePriceRangeValue} value={priceRange} />
            </div>
        </div>
    )
}

export default FilterByPrice