import React from 'react'
import logo from '../../../logosharing.png'
import '../css/HomeSharingHeader.css'



const HomeSharingHeader = () => {

  return (
    <div className="">
      <div className="container navbar-main">
      <img src={logo} alt="" className="logo-main"></img>
      <div>About us</div>
      <div>Examples</div>
      <div>Comments</div>
      <div>Team</div>
      </div>
    </div>
  )
}

export default HomeSharingHeader