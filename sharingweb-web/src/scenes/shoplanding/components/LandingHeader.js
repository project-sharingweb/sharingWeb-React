import React from 'react'
import { Link } from 'react-router-dom'
import { withShopContext } from '../../../contexts/ShopStore';
import '../css/LandingHeader.css'



const LandingHeader = ({ shop }) => {
  
  return (
    <div className="container landing-navbar">
      <Link to={`/shops/${shop.name}`}><img className="logo-image" src={shop.logo} alt="shop-logo"/></Link>
      <div className="navbar-items">
          <div className="nav-bar-li li1"><Link to={`/shops/${shop.name}/about-us`}>About Us</Link></div>
          <div className="nav-bar-li li2"><Link to="#">Discover</Link></div>
          <div className="nav-bar-li li3"><Link to="#">Help</Link></div>
          <div className="nav-bar-li li4"><Link to="#">Cart</Link></div>
      </div>
    </div>
  )
}

export default withShopContext(LandingHeader)