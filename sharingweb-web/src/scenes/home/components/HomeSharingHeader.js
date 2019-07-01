import React from 'react'
import logo from '../../../images/logosharing.png'
import '../css/HomeSharingHeader.css'




const HomeSharingHeader = () => {

  return (
    <div className="container landing-navbar2">
      <img className="logo-image2" src={logo} alt="shop-logo"/>
      <div className="navbar-items2">
          <div className="nav-bar-li2 newli1"><a href="#about-us">About Us</a></div>
          <div className="nav-bar-li2 newli2"><a href="#examples">Examples</a></div>
          <div className="nav-bar-li2 newli3"><a href="#comments">Comments</a></div>
          <div className="nav-bar-li2 newli4"><a href="#team">Team</a></div>
      </div>
    </div>
  )
}

export default HomeSharingHeader