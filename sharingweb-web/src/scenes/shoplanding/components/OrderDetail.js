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

  let myOrder
  if (this.props.shop){  
    myOrder = this.props.orders.filter(order => order.id === this.props.match.params.id)[0]
  }

  return (
    <React.Fragment>
      {this.state.goOrders && <Redirect to={`/shops/${shop.urlName}/orders`}></Redirect>}
      {shop && (
        <React.Fragment>
          {isAuthenticated() ? (
            <div style={shop.styles.background} className="main-background">
            <LandingHeader></LandingHeader>
            <div className="container">
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