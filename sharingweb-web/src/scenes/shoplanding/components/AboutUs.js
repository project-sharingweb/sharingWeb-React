import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import ButtonPage from './ButtonPage';



const AboutUs = props => {


  return (
    <div>
      <LandingHeader></LandingHeader>
  
      <ButtonPage></ButtonPage> 
      <div className="container">
        <p>{props.shop.aboutUs}</p>
      </div>

      <div instructions-footer>
        <LandingFooter></LandingFooter>
      </div>
      
    </div>
    

  )
}

export default withShopContext(AboutUs)