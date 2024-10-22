import React, { useState } from 'react'
import './Shop.css'
import Product from '../../components/Product/index.jsx'
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import product7 from '../../assets/images/product7.png'
import product8 from '../../assets/images/product8.png'
import product9 from '../../assets/images/product9.png'
import SideBarCart from '../../components/SideBarCart/index.jsx'
import FilterByPrice from '../../components/FilterByPrice/FilterByPrice.jsx'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx'
import ProductView from '../../components/ProductView/ProductView.jsx'

const Shop = () => {
    const [productDisplay, setProductDisplay] = useState(false)
    const productData = [
        {name: 'pestle', image: product1, price: 40.43, addToCart: '#1'},
        {name: 'mortar', image: product2, price: 10.43, addToCart: '#2'},
        {name: 'fan', image: product3, price: 30.43, addToCart: '#3'},
        {name: 'bowl', image: product4, price: 50.43, addToCart: '#4'},
        {name: 'cherry-pack', image: product5, price: 20.43, addToCart: '#5'},
        {name: 'rinser', image: product6, price: 60.43, addToCart: '#6'},
        {name: 'bowl', image: product7, price: 50.43, addToCart: '#7'},
        {name: 'cherry-pack', image: product8, price: 20.43, addToCart: '#8'},
        {name: 'rinser', image: product9, price: 60.43, addToCart: '#9'},
    ]

    const handleClose = () => {
        setProductDisplay(false)
    }

    const displayProduct = () => {
        setProductDisplay(true)
    }

  return (
    <div className='shop'>
        <div className='shop-contents'>
            {productDisplay && <ProductView productImages={productData} handleClose={handleClose} />}
            {productData && productData.map((product, index) => (
                <Product key={index} name={product.name} image={product.image} price={product.price} addToCart={product.addToCart} displayProduct={displayProduct}/>
            ))}
        </div>
        <div className='shop-sidebar'>
            <div className='shop-cart'>
                <p className='shop-cart-p'>Cart</p>
                <SideBarCart cartContents={'No items in the cart.'}/>
            </div>
            <FilterByPrice />
            <p className='featured-products-p'>Featured Products</p>
            {productData && productData.slice(-3).map((product, index)=>(
                <FeaturedProducts title={product.name} image={product.image} price={product.price}/>
            ))}
            
        </div>
    </div>
  )
}

export default Shop