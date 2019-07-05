import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import ButtonPage from './ButtonPage';



const AboutUs = ({shop}) => {
  

  return (
    <div>
      {shop && 
      <div> 
        <LandingHeader></LandingHeader>
    
        <ButtonPage></ButtonPage> 
        <div className="container">
          <p>{shop.aboutUs}</p>
        </div>

        <div instructions-footer>
          <LandingFooter></LandingFooter>
        </div>
      </div>}
    </div>
    

  )
}

export default withShopContext(AboutUs)