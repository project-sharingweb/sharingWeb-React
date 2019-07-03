import React from 'react'
import { Link } from 'react-router-dom'
import { withShopContext } from '../../../contexts/ShopStore';
import '../css/LandingHeader.css'



const LandingHeader = ({ shop }) => {
  
  return (
    <div className="container landing-navbar2">
      <Link to={`/shops/${shop.name}`}><img className="logo-image2" src={shop.styles.logo} alt="shop-logo"/></Link>
      <div className="navbar-items2">
          <div className="nav-bar-li2 newli1"><Link className="Link" to={`/shops/${shop.name}/about-us`}>About Us</Link></div>
          <div className="nav-bar-li2 newli2"><Link className="Link" to="#">Discover</Link></div>
          <div className="nav-bar-li2 newli3"><Link className="Link" to="#">Help</Link></div>
          <div className="nav-bar-li2 newli4"><Link className="Link" to="#">Cart</Link></div>
      </div>
    </div>
  )
}

export default withShopContext(LandingHeader)