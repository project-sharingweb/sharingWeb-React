import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import '../css/Orders.css'




class Orders extends React.Component {

  render(){
    const {shop, orders} = this.props
    if(shop) console.log(orders)
    let list;
    if(orders){
      list = orders.map( (item, i) => {
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
          <div className="cart-main-second"><p>{item.amount}</p></div>
          <div className="cart-main-third">{item.price * item.amount}€</div>
        </div>)
      })
    } 
    return (
      <React.Fragment>
        {shop &&
          <div style={shop.styles.background} className="main-background">
            <LandingHeader></LandingHeader>
            <div className="container">
              <h1 className="cart-title">Orders</h1>
              {list}
            </div>
            <LandingFooter></LandingFooter>
          </div>}
      </React.Fragment>
      

    )
  }
}

export default withShopContext(Orders)