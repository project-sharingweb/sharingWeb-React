import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import '../css/AboutUs.css'



const AboutUs = ({shop, onShopChange}) => {
  

  return (
    <div>
      {shop && 
      <div className="about-us-wrapper"> 
        <LandingHeader></LandingHeader>
        

        <div className="container">
          <h1 className="about-us-title">About us</h1>
          <p className="about-us-text">{shop.aboutUs}</p>
        </div>

        <div style={{width: "100%"}}>
          <LandingFooter></LandingFooter>
        </div>
      </div>}
    </div>
    

  )
}

export default withShopContext(AboutUs)