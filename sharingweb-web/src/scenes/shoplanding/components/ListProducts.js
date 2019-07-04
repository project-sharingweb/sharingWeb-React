import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import ProductCard from './ProductCard';
import LandingFooter from './LandingFooter';



const ListProducts = (props) => {
    let list;
    if(props.products){
        list = props.products.map((item, i) => {
          return <ProductCard key={i} product={item}></ProductCard>
        })
    }

  return (
    
    <div>
      <LandingHeader></LandingHeader>
      <div className="container">
        <div className="products-wrapper">
            {list}
        </div>
      </div>
      <LandingFooter></LandingFooter>
    </div>
  )
}

export default withShopContext(ListProducts)