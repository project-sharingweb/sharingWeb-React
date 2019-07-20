import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import LandingFooter from './LandingFooter';
import "../css/DetailProduct.css"




const DetailProducts = (props) => {
let myProduct
  if (props.shop){  
  myProduct = props.products.filter(product => product.id === props.match.params.id)[0]
}
  return (
    <div>
      {props.shop && 
    
    <div>
      <LandingHeader></LandingHeader>


      <div className="container detail-product-wrapper">
          <div className="product-detail-main-section">
            <div className="">
              <img className="image-detail-product" src={myProduct.image} alt="product pic"/>
            </div>
            <div className="texto">
              <h1>{myProduct.name}</h1>
              <p><span class='wrong-price'>{myProduct.price*2}.00€</span> <span className='correct-price'>{myProduct.price}.00€</span></p>
              <button className="btn btn-md btn-primary">Add to cart</button>
              <p>{myProduct.description}</p>
            </div>
          </div>

          <div className="description"></div>
          
      </div>
      
      <LandingFooter></LandingFooter>
    </div>
    }
    </div>
  )
}

export default withShopContext(DetailProducts)