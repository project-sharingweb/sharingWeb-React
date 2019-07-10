import React from 'react'
import {withShopContext} from '../../../contexts/ShopStore'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'
import '../css/Cart.css'
import {Link} from 'react-router-dom'


const Cart = ({shop, cart, addToCart, unAddToCart, removeFromCart}) => {
  let list;
  if(cart){
    list = cart.map( (item, i) => {
      return (<div key={i} className="cart-product">
        <div className="cart-product-info cart-main-first">
          <div className="mr-2">
            <img className="cart-img" src={item.image} alt="product"></img>
          </div>
          <div>
            <div>{item.name}</div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
        <div className="cart-main-second">{item.price}€</div>
        <div className="cart-main-second"><p>{item.amount}</p></div>
        <div className="cart-main-third">{item.price * item.amount}€</div>
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
          <div className="info-cart-wrapping mb-5">
            <div className="cart-product-main">
              <div className="cart-main-first">Product</div>
              <div className="cart-main-second">price</div>
              <div className="cart-main-second">Quantity</div>
              <div className="cart-main-third">Total</div>
            </div>
            {list}
            <div className="cart-product-main">
              <div className="cart-main-first"></div>
              <div className="cart-main-second">{cart && cart.reduce((acc,a)=> acc + parseInt(a.price), 0)}</div>
              <div className="cart-main-second"></div>
              <div className="cart-main-third">{cart && cart.reduce((acc,a)=> acc + (parseInt(a.price)*a.amount), 0)}</div>
            </div>
            <div className="cart-checkout-wrapper">
              <Link to={`/shops/${shop.urlName}/checkout`} className="btn btn-success mt-4 mb-4 cart-checkout">Checkout</Link>
            </div>
          </div>
        </div>
        <LandingFooter></LandingFooter>
      </div>}
    </div>
  )
}

export default withShopContext(Cart)