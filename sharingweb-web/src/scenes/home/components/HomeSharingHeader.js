import React from 'react'
import logo from '../../../images/logo-limpio.png'
import '../css/HomeSharingHeader.css'
import {Link} from 'react-router-dom'




const HomeSharingHeader = () => {

  return (
    <div className="container landing-navbar2">
      <Link to="/"><img className="logo-image2" src={logo} alt="shop-logo"/></Link>
      <div className="navbar-items2">
          <div className="nav-bar-li2 newli1"><a href="#about-us" className="p-1">About Us</a></div>
          <div className="nav-bar-li2 newli2"><a href="#examples" className="p-1">Examples</a></div>
          <div className="nav-bar-li2 newli3"><a href="#comments" className="p-1">Comments</a></div>
          <div className="nav-bar-li2 newli4"><a href="#team" className="p-1">Team</a></div>
      </div>
    </div>
  )
}

export default HomeSharingHeader