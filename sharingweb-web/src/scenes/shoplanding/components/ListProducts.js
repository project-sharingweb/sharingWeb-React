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
    {props.shop &&
      <div style={props.shop.styles.background}>
        <LandingHeader></LandingHeader>
        <div className="container">
          <div className="products-wrapper">
              {list}
          </div>
        </div>
        <LandingFooter></LandingFooter>
      </div>}
    </div>

  )
}

export default withShopContext(ListProducts)