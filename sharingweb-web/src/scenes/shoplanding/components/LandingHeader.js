import React from 'react'
import { Link } from 'react-router-dom'
import { withShopContext } from '../../../contexts/ShopStore';
import { WithAuthContext } from '../../../contexts/AuthStore';
import AuthServices from '../../../services/AuthServices'
import '../css/LandingHeader.css'



const LandingHeader = ({ shop, isAuthenticated, onShopAuthChange }) => {

  const handleLogout = () => {
    AuthServices.logout()
    .then(
      response => {
        onShopAuthChange()
      },
      error => console.error(error)
    )
  }

  return (
    
    <div className="container landing-navbar2">
      <Link to={`/shops/${shop.urlName}`}><img className="logo-image2" src={shop.logo} alt="shop-logo"/></Link>
      <div  className="navbar-items2">
          <div className="nav-bar-li2 newli1"><Link style={shop.styles.navLinks} className="Link" to={`/shops/${shop.urlName}/about-us`}>About Us</Link></div>
          <div className="nav-bar-li2 newli2"><Link style={shop.styles.navLinks} className="Link" to={`/shops/${shop.urlName}/products`}>Products</Link></div>
          <div className="nav-bar-li2 newli3"><Link style={shop.styles.navLinks} className="Link" to={`/shops/${shop.urlName}/orders`}>Orders</Link></div>
          {isAuthenticated() && <div className="nav-bar-li2 newli4"><Link style={shop.styles.navLinks} className="Link" to={`/shops/${shop.urlName}`}><i className="Link fa fa-sign-out" onClick={e => {
            e.preventDefault()
            handleLogout()}}>Log out</i></Link></div>}
      </div>
    </div>
  )
}

export default WithAuthContext(withShopContext(LandingHeader))