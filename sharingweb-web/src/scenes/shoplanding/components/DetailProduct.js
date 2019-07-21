import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import LandingFooter from './LandingFooter';
import "../css/DetailProduct.css"




const DetailProducts = (props) => {
const {shop, products} = props

let myProduct
  if (shop){  
  myProduct = products.filter(product => product.id === props.match.params.id)[0]
}
  return (
    <div>
      {shop && 
    
    <div style={shop.styles.background} className="main-background">
      <LandingHeader></LandingHeader>


      <div className="container detail-product-wrapper pb-5">
          <div className="product-detail-main-section">
            <div>
              <img className="image-detail-product" src={myProduct.image} alt="product pic"/>
            </div>
            <div className="product-detail-info-section">
              <h1 style={shop.styles.text}>{myProduct.name}</h1>
              <p><span className='wrong-price'>{myProduct.price*2}€</span> <span className='correct-price'>{myProduct.price}€</span></p>
              <button  className="btn btn-md btn-primary button-detail-product" onClick={() => props.addToCart(myProduct)}>Add to cart</button>
              <p style={shop.styles.text} className="detail-product-description">{myProduct.description}</p>
              <p style={shop.styles.background} className="tell-to-buy"><strong style={shop.styles.text}>Click </strong><span className="tell-to-buy-clic">Add To Cart</span><strong style={shop.styles.text}> To Get Yours Now! Limited Quantity - Will sell out fast!</strong></p>
            </div>
          </div>
      </div>
      
      <LandingFooter></LandingFooter>
    </div>
    }
    </div>
  )
}

export default withShopContext(DetailProducts)