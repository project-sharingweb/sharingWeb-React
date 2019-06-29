import React from 'react'
import {Link} from 'react-router-dom'
import '../css/LandingHeader.css'



const LandingHeader = props => {
  const { data } = props
  
  return (
    <div className="container landing-navbar">
      <Link to={`/shops/${data.name}`}><img className="logo-image" src={data.logo} alt="shop-logo"/></Link>
      <div className="navbar-items">
          <div className="nav-bar-li li1"><Link to={`/shops/${data.name}/about-us`}>About Us</Link></div>
          <div className="nav-bar-li li2"><Link to="#">Discover</Link></div>
          <div className="nav-bar-li li3"><Link to="#">Help</Link></div>
          <div className="nav-bar-li li4"><Link to="#">Cart</Link></div>
      </div>
    </div>
  )
}

export default LandingHeader