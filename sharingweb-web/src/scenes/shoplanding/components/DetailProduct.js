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
          <div className="imageAndTexto">
            <div className="image">
              <img className="logo-image2" src={myProduct.image} alt="product-card"/>
            </div>
            <div className="texto">
              <li>Name</li>
              <li>Category</li>
              <li>Price</li>
            </div>
          </div>

          <div className="description"></div>
          <button className="btn btn-md btn-primary">Add to cart</button>
      </div>
      
      <LandingFooter></LandingFooter>
    </div>
    }
    </div>
  )
}

export default withShopContext(DetailProducts)