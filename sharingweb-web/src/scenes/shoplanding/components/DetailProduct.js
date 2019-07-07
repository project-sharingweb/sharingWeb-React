import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import ProductCard from './ProductCard';
import LandingFooter from './LandingFooter';
import "../css/DetailProduct.css"



const DetailProducts = (props) => {

  return (
    
    <div>
      <LandingHeader></LandingHeader>
      <div className="container">
        <div className="products-wrapper">
            
        </div>
      </div>
      <LandingFooter></LandingFooter>
    </div>
  )
}

export default withShopContext(DetailProducts)