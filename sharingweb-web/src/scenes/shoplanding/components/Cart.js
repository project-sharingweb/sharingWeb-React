import React from 'react'
import {withShopContext} from '../../../contexts/ShopStore'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'
import '../css/Cart.css'



const Cart = ({shop, cart}) => {

  let list;
  if(shop){
    list = cart.map( (item, i) => {
      return (<div key={i} className="cart-product">
        <div>
          <div>{item.image}</div>
          <div>{item.name}</div>
          <button className="btn btn-danger">Remove</button>
        </div>
        <div>{item.price}€</div>
        <div><input type="number"></input></div>
        <div>{item.price * item.amount}€</div>
      </div>)
    })
  }


  return (
    <div>
      {shop &&
      <div style={shop.styles.background}>
        <LandingHeader></LandingHeader>
        <div className="container">
          <h1 className="cart-title">Your Cart</h1>
          <div className="info-cart-wrapping">
            <div className="cart-product-main">
              <div className="cart-main-first">Product</div>
              <div className="cart-main-second">price</div>
              <div className="cart-main-second">Quantity</div>
              <div className="cart-main-third">Total</div>
            </div>
          </div>
        </div>
        <LandingFooter></LandingFooter>
      </div>}
    </div>
  )
}

export default withShopContext(Cart)