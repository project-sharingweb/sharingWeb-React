import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import {WithAuthContext} from '../../../contexts/AuthStore'
import {Redirect} from 'react-router-dom'
import '../css/OrderDetail.css'

class OrderDetail extends React.Component {
  state = {
    goOrders: false
  }

  render() {
  const {shop, isAuthenticated, fulfillOrder} = this.props

  const fulfillment = (id, name) => {
    fulfillOrder(id, name)
    this.setState({
      goOrders: true
    })
  }

  let myOrder;
  if (this.props.shop){  
    myOrder = this.props.orders.filter(order => order.id === this.props.match.params.id)[0]
  }

  let list;
  if(shop) {
    list = myOrder.products.map((item, i) => {
      return (<div key={i} className="cart-product">
      <div className="cart-product-info cart-main-first">
        <div className="mr-2">
          <img className="cart-img" src={item.image} alt="product"></img>
        </div>
        <div>
          <div>{item.name}</div>
        </div>
      </div>
      <div className="cart-main-second">{item.price}€</div>
      <div className="cart-main-second quantity-wrapper">
        <p className="p-cart-quantity mr-4 pt-2">{myOrder.amounts[i]}</p>
      </div>
      <div className="cart-main-third">{item.price * myOrder.amounts[i]}€</div>
    </div>)
    })
  }

  return (
    <React.Fragment>
      {this.state.goOrders && <Redirect to={`/shops/${shop.urlName}/orders`}></Redirect>}
      {shop && (
        <React.Fragment>
          {isAuthenticated() ? (
            <div style={shop.styles.background} className="main-background">
            <LandingHeader></LandingHeader>
            <div className="container pb-3">
              <h1 className="order-title">Order #{myOrder.number}</h1>
              <div className="order-detail-wrapper">
                <div className="order-info">
                  <h2>{myOrder.name} {myOrder.lastName}</h2>
                  <p>{myOrder.email}</p>
                  
                </div>
                <div className="order-address">
                  <h2>Shipping information</h2>
                  <p>{myOrder.street}</p>
                  <p>{myOrder.city} {myOrder.zipCode}</p>
                  <p>{myOrder.country}</p>
                </div>
              </div>
              <div className="info-cart-wrapping mb-5">
                <div className="cart-product-main">
                  <div className="cart-main-first">Product</div>
                  <div className="cart-main-second">price</div>
                  <div className="cart-main-second">Quantity</div>
                  <div className="cart-main-third">Total</div>
                </div>
                {list}
              </div>
              <button className="fulfill-button" onClick={() => fulfillment(myOrder.id, myOrder.shopName)}>Fulfill order</button>
            </div>
              <LandingFooter></LandingFooter>
          </div>)
        :
        <Redirect to={`/shops/${shop.urlName}`}></Redirect>}
        </React.Fragment>)}
      </React.Fragment>
  )}
}

export default WithAuthContext(withShopContext(OrderDetail))