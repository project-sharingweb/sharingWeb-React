import React from 'react'
import {withShopContext} from '../../../contexts/ShopStore'
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import '../css/LandingPurchase.css'

const SuccessPurchase = ({shop, logo, title, message, red}) => {

  return (
    <div>
      {shop &&
        <div style={shop.styles.background} className="main-background pb-2">
          <LandingHeader></LandingHeader>
          <div className="container">
          <div className="container payment-success-wrapper">
            <h1 className="payment-success-title">{title}</h1>
            <img src={logo} className="payment-success-logo" alt="payment logo success"></img>
            { red ? <p style={{color:red}} className="payment-success-text">{message}</p>:
              <p className="payment-success-text">{message}</p>}
          </div>
          </div>
          <LandingFooter></LandingFooter>
        </div>
      }</div>
  )
}

export default withShopContext(SuccessPurchase)