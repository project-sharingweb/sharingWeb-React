import React from 'react'
import logo from '../../../images/logosharing.png'
import '../css/HomeSharingHeader.css'



const HomeSharingHeader = () => {

  return (
    <div className="container landing-navbar">
      <img src={logo} alt="" className="logo-main"></img>
      <div className="navbar-items">
          <div className="nav-bar-li li1"><a href="#about-us">About us</a></div>
          <div className="nav-bar-li li2"><a href="#examples">Examples</a></div>
          <div className="nav-bar-li li3"><a href="#comments">Comments</a></div>
          <div className="nav-bar-li li4"><a href="#team">Team</a></div>
      </div>
    </div>
  )
}

export default HomeSharingHeader