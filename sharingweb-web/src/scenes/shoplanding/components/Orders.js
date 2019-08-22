import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import '../css/Orders.css'
import {Link, Redirect} from 'react-router-dom'
import {WithAuthContext} from '../../../contexts/AuthStore'

class Orders extends React.Component {
  state = {
    showOrders: "all"
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      showOrders: value
    })
  }


  render(){
    const {shop, orders, isAuthenticated} = this.props
    if (shop) document.title = shop.name
    if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
    const {showOrders} = this.state
    let list;
    let options;
    if(orders){
        const ordersStatus = [...new Set(orders.map(item => item.status))]
          options = ordersStatus.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })
        if (showOrders === "all"){
          list = orders.map( (item, i) => {
            return (<div key={i} className="order-product">
              <div className="order-product-info order-main-first"><Link to={`/shops/${shop.urlName}/orders/${item.id}`}>#{item.number} / {item.name} {item.lastName}</Link></div>
              <div style={shop.styles.text} className="order-main-second">{item.price[0] === "0"? item.price.slice(1,item.price.length): item.price}{shop.currency==="USD" ? "$":"€"}</div>
              <div className="order-main-third"><span className={item.status === "in process" ? "in-process": item.status}>{item.status}</span></div>
            </div>)
          })
        } else {
          let filtered = orders.filter(item => item.status === showOrders)
          list = filtered.map((item, i) => {
            return (<div key={i} className="order-product">
                <div className="order-product-info order-main-first"><Link to={`/shops/${shop.urlName}/orders/${item.id}`}>#{item.number} / {item.name} {item.lastName}</Link></div>
                <div style={shop.styles.text} className="order-main-second">{item.price}{shop.currency==="USD" ? "$":"€"}</div>
                <div className="order-main-third"><span className={item.status === "in process" ? "in-process": item.status}>{item.status}</span></div>
              </div>)
            })
        }
    }
    
    return (
        <React.Fragment>
          {shop && (
          <React.Fragment>
            {(isAuthenticated() && this.props.shopUser.name === shop.name) ? (
            <div style={shop.styles.background} className="main-background">
              <LandingHeader></LandingHeader>
              <div className="container pb-4">
                <h1 style={shop.styles.text} className="order-title">Orders</h1>
                <div className="mt-4">
                  <label style={shop.styles.text} className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose Status</label>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handleChange}>
                  <option  value="all">Show all orders...</option>
                  {options}
                  </select>
                </div>
                <div className="info-order-wrapping mb-5">
                <div className="order-product-main">
                  <div style={shop.styles.text} className="order-main-first">Number / Name</div>
                  <div style={shop.styles.text} className="order-main-second">Value</div>
                  <div style={shop.styles.text} className="order-main-third">Status</div>
                </div>
                {list}
                </div>
              </div>
              <LandingFooter></LandingFooter>
          </div>)
          :
          <Redirect to={`/shops/${shop.urlName}`}></Redirect>}
          </React.Fragment>)}
        </React.Fragment>
    )
  }
}

export default WithAuthContext(withShopContext(Orders))